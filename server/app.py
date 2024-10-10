from flask import make_response, session, request
from flask_restful import Resource
import os
from config import app, api, db
from flask_mail import Mail, Message


BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get("DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")
mail = Mail(app)

from models.photo import Photo
from models.portfolio import Portfolio
from models.admin import Admin
from models.product import Product
from models.tag import Tag


class Portfolios(Resource):
    def get(self):
        try:
            return make_response(
                [portfolio.to_dict() for portfolio in Portfolio.query], 200
            )
        except Exception as e:
            return make_response({"error": str(e)}, 404)

    def post(self):
        data = request.get_json()

        try:
            new_portfolio = Portfolio(**data)
            db.session.add(new_portfolio)
            db.session.commit()
        except Exception as e:
            db.session.rollback()
            return make_response({"error": str(e)}, 400)


class Products(Resource):
    def get(self):
        try:
            return make_response([product.to_dict() for product in Product.query], 200)
        except Exception as e:
            return make_response({"error": str(e)}, 404)

    def post(self):
        data = request.get_json()
        selected_tag_ids = data.get("tags", [])
        tags = Tag.query.filter(Tag.id.in_(selected_tag_ids)).all()

        try:
            new_product = Product(
                name=data["name"],
                description=data["description"],
                price=data["price"],
                tags=tags
            )
            db.session.add(new_product)
            db.session.commit()
            return make_response(new_product.to_dict(), 201)
        except Exception as e:
            db.session.rollback()
            return make_response({"error": str(e)}, 400)


class PortfolioById(Resource):
    def get(self, id):
        try:
            portfolio = db.session.get(Portfolio, id)
            if portfolio is None:
                return make_response({"error": str(e)}, 404)
            else:
                return make_response(portfolio.to_dict(), 200)
        except Exception as e:
            return make_response({"error": str(e)}, 404)

    def delete(self, id):
        try:
            portfolio = db.session.get(Portfolio, id)
            if portfolio:
                db.session.delete(portfolio)
                db.session.commit()
                return make_response({}, 204)
        except Exception as e:
            db.session.rollback()
            return make_response({"error": str(e)}, 400)

    def patch(self, id):
        try:
            portfolio = db.session.get(Portfolio, id)
            if portfolio is None:
                return make_response({"error": "portfolio not found"}, 404)
            data = request.get_json()
            for key, value in data.items():
                if hasattr(portfolio, key):
                    setattr(portfolio, key, value)
            db.session.commit()
        except Exception as e:
            db.session.rollback()
            return make_response({"error": str(e)}, 400)


class ProductById(Resource):
    def get(self, id):
        try:
            product = db.session.get(Product, id)
            if product is None:
                return make_response({"error": str(e)}, 404)
            else:
                return make_response(product.to_dict(), 200)
        except Exception as e:
            return make_response({"error": str(e)}, 404)

    def delete(self, id):
        try:
            product = db.session.get(Product, id)
            if product:
                db.session.delete(product)
                db.session.commit()
                return make_response({}, 204)
        except Exception as e:
            db.session.rollback()
            return make_response({"error": str(e)}, 400)

    def patch(self, id):
        try:
            product = db.session.get(Product, id)
            if product is None:
                return make_response({"error": "product not found"}, 404)
            data = request.get_json()
            for key, value in data.items():
                if hasattr(product, key):
                    setattr(product, key, value)
            db.session.commit()
        except Exception as e:
            db.session.rollback()
            return make_response({"error": str(e)}, 400)


class Login(Resource):
    def post(self):
        try:
            data = request.get_json()
            username = data.get("username")
            password = data.get("password")
            user = Admin.query.filter_by(username=username).first()

            if user and user.authenticate(password):
                session["user_id"] = user.id
                print(session)
                return make_response(user.to_dict(), 200)
            return make_response({"error": "Incorrect email or password"}, 401)
        except Exception as e:
            return make_response({"error": str(e)}, 422)


class CheckSession(Resource):
    def get(self):
        try:
            user_id = session.get("user_id")
            if not user_id:
                return make_response({"message": "No user logged in"}, 401)
            if user_id:
                user = Admin.query.filter_by(id=user_id).first()
                return make_response({"user": user.to_dict()}, 200)
            return make_response({"error": "User not found"}, 404)

        except Exception as e:
            return make_response({"error": str(e)}, 422)


class Logout(Resource):
    def delete(self):
        try:
            user_id = session.get("user_id")
            if user_id:
                del session["user_id"]
                return make_response({}, 204)

        except Exception as e:
            return make_response({"error": str(e)}, 400)


class Tags(Resource):
    def get(self):
        try:
            return make_response([tag.to_dict() for tag in Tag.query], 200)
        except Exception as e:
            return make_response({"error": str(e)}, 404)
        
class Photos(Resource):
    def allowed_file(filename):
        return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
    def post(self):
        # Check if 'image' is in the request.files
        if 'image' not in request.files:
            return make_response({"error": "No file part in the request"}, 400)
        
        file = request.files['image']

        # If no file is selected
        if file.filename == '':
            return make_response({"error": "No file selected"}, 400)

        # Ensure it's an allowed file type
        if file and allowed_file(file.filename):
            try:
                # Save the file with a secure filename
                filename = file.filename
                file_path = os.path.join(UPLOAD_FOLDER, filename)
                file.save(file_path)

                # Create the Photo object with the file path and any other metadata
                data = request.form  # Grab other form data (like product_id, portfolio_id, etc.)
                photo = Photo(file_path=file_path, **data)
                
                db.session.add(photo)
                db.session.commit()

                return make_response(photo.to_dict(), 201)
            except Exception as e:
                db.session.rollback()  # Rollback if there is an error
                return make_response({"error": str(e)}, 500)
        else:
            return make_response({"error": "File type not allowed"}, 400)
        
class Inquiries(Resource):
    def send_email():
        data = request.get_json()  # Call the method to get JSON data
        try:
            msg = Message(
                subject=f"Inquiry from {data['name']}",
                sender='ebarnesdesigninquiry@gmail.com',
                recipients=['mrbarnes00@gmail.com'],  # Wrap recipients in a list
                body=f"Name: {data['name']}\nEmail: {data['email']}\nMessage: {data['message']}"
            )
            mail.send(msg)
            return make_response("Inquiry sent", 200)
        except Exception as e:
            return make_response({"error": str(e)}, 400)
    def post(self):
        data = request.get_json()
        try:
            new_inquiry = Inquiry(**data)
            db.session.add(new_inquiry)
            db.session.commit()
            return make_response("Inquiry added", 201)
        except Exception as e:
            db.session.rollback()
            return make_response({"error": str(e)})






api.add_resource(Portfolios, "/portfolios")
api.add_resource(Products, "/products")
api.add_resource(PortfolioById, "/portfolios/<int:id>")
api.add_resource(ProductById, "/products/<int:id>")
api.add_resource(Login, "/login")
api.add_resource(CheckSession, "/check-session")
api.add_resource(Logout, "/logout")
api.add_resource(Tags, "/tags")
api.add_resource(Photos, "/photos")
api.add_resource(Inquiries, "/inquiries")


if __name__ == "__main__":
    app.run(port=5555, debug=True)
