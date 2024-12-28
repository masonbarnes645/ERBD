from flask import make_response, session, request, send_from_directory, render_template
from flask_restful import Resource
import os
from config import app, api, db
from flask_mail import Mail, Message
from werkzeug.utils import secure_filename
from werkzeug.datastructures import FileStorage
import boto3
import uuid
import mimetypes
from dotenv import load_dotenv
load_dotenv()





from models.photo import Photo
from models.portfolio import Portfolio
from models.admin import Admin
from models.product import Product
from models.tag import Tag

s3_bucket = app.config['S3_BUCKET']
s3_region = app.config['S3_REGION']

mail = Mail(app)

#REACT ROUTES

@app.route("/")
@app.route("/portfolios")
@app.route("/portfolios/<int:id>")
@app.route("/products")
@app.route("/products/<int:id>")
@app.route("/contact-us")
@app.route("/login")
@app.route("/control")
@app.route("/control-photo")
def index (id = 0):
    return render_template("index.html")




print(os.getenv('S3_ACCESS_KEY'), app.config['S3_SECRET_KEY'])

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
        

def allowed_file(filename):
    ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

s3_client = boto3.client(
            's3',
            aws_access_key_id=app.config['S3_ACCESS_KEY'],
            aws_secret_access_key=app.config['S3_SECRET_KEY'],
            region_name=s3_region
        )
def upload_to_s3(file, filename):
    mime_type, _ = mimetypes.guess_type(filename)
    if mime_type is None:
        mime_type = 'application/octet-stream'
    try:
        s3_client.upload_fileobj(
            file,
            s3_bucket,
            filename,
            ExtraArgs={
                "ACL":"public-read",
                "ContentType": mime_type       
                       } 
        )
        return f"https://{s3_bucket}.s3.{s3_region}.amazonaws.com/{filename}"
    except Exception as e:
        raise RuntimeError(f"Failed to upload file to S3: {str(e)}")
    

class Photos(Resource):
    def post(self):
            file = request.files['image']
            if not file or file.filename == '':
                return make_response({"error": "No file selected"}, 400)

            if allowed_file(file.filename):
                try:
                    filename = f"{uuid.uuid4().hex}_{secure_filename(file.filename)}"
                    file_url = upload_to_s3(file, filename)
                    data = request.form.to_dict()
                    photo = Photo(file_url=file_url, **data)
                    db.session.add(photo)
                    db.session.commit()

                    return make_response(photo.to_dict(), 201)
                except Exception as e:
                        db.session.rollback()  
                        return make_response({"error": str(e)}, 500)
            else:
                return make_response({"error": "File type not allowed"}, 400)
        

class PhotosByOwner(Resource):
    def get(self, owner_id, owner_type):
        try:
            if owner_type == 'product':
                photos_by_owner_id = Photo.query.filter(
                    Photo.owner_id == owner_id, 
                    Photo.owner_type == "product"
                ).all()
                return make_response([photo.to_dict() for photo in photos_by_owner_id], 200)
            elif owner_type == 'portfolio':
                photos_by_owner_id = Photo.query.filter(
                    Photo.owner_id == owner_id, 
                    Photo.owner_type == "portfolio"
                ).all()
                return make_response([photo.to_dict() for photo in photos_by_owner_id], 200)
        except Exception as e:
                return make_response({"error": str(e)}, 500)
            


#! fetch photos where owner_id = id and owner type is correct
        
def send_email(data):
        msg = Message(
            subject=f"{data['subject']} from {data['firstname']}",
            sender='ebarnesdesigninquiry@gmail.com',
            recipients=['betsy@ebarnesdesign.com', 'adrienne@ebarnesdesign.com'],  
        )
        msg.body=f"Name: {data['firstname']} {data['lastname']}\nEmail: {data['email']}\n Subject: {data['subject']}\n Message: {data['message']}"
        with app.app_context():
            mail.send(msg)

class Inquiries(Resource):
    def post(self):
        data = request.get_json()
        data['name'] = f"{data['firstname']} {data['lastname']}"
        try:
            send_email(data)
            return make_response("Inquiry sent", 200)
        except Exception as e:
            return make_response({"error": str(e)}, 500)
        
class File(Resource):
    def get(self, file_path):
        try:
            uploads_dir = os.path.join(os.getcwd(), 'uploads')
            return send_from_directory(uploads_dir, file_path)
        except Exception as e:
            return make_response({"error": str(e)}, 500)
        
# with open('uploads/berk1.jpg', 'rb') as file:
#     filename = 'berk1.jpg'
#     file_url = upload_to_s3(file, filename)
#     print(f"Uploaded file URL: {file_url}")


# session = boto3.Session()
# credentials = session.get_credentials()
# print("Credentials:", credentials)
# print("Access Key:", credentials.access_key)
# print("Secret Key:", credentials.secret_key)



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
api.add_resource(File, "/uploads/<string:file_path>")
api.add_resource(PhotosByOwner, "/photos/<string:owner_type>/<int:owner_id>")


if __name__ == "__main__":
    app.run(port=5555, debug=True)



