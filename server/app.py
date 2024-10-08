from flask import make_response, session, request
from flask_restful import Resource
import os
from config import app, api, db


BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get("DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")

from models.photo import Photo
from models.portfolio import Portfolio
from models.admin import Admin
from models.product import Product
from models.tag import Tag

class Portfolios(Resource):
    def get(self):
        try:
            return make_response([portfolio.to_dict() for portfolio in Portfolio.query], 200)
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
        try:
            new_product = Product(**data)
            db.session.add(new_product)
            db.session.commit()
        except Exception as e:
            db.session.rollback()
            return make_response({"error": str(e)}, 400)

        

class PortfolioById(Resource):
    def get(self,id):
        try:
            portfolio = db.session.get(Portfolio, id)
            if portfolio is None:
                return make_response({"error": str(e)}, 404)
            else:
                return make_response(portfolio.to_dict(), 200)
        except Exception as e:
            return make_response({"error": str(e)}, 404)
    def delete(self,id):
        try:
            portfolio = db.session.get(Portfolio, id)
            if portfolio:
                db.session.delete(portfolio)
                db.session.commit()
                return make_response({}, 204)
        except Exception as e:
            db.session.rollback()
            return make_response({"error": str(e)}, 400)

     

class ProductById(Resource):
    def get(self,id):
        try:
            product = db.session.get(Product, id)
            if product is None:
                return make_response({"error": str(e)}, 404)
            else:
                return make_response(product.to_dict(), 200)
        except Exception as e:
            return make_response({"error": str(e)}, 404)
    def delete(self,id):
        try:
            product = db.session.get(Product, id)
            if product:
                db.session.delete(product)
                db.session.commit()
                return make_response({}, 204)
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
                return make_response(user.to_dict(),200)
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
                del session ["user_id"]
                return make_response ({}, 204)
            
        except Exception as e:
            return make_response({"error": str(e)}, 400)
        

            





api.add_resource(Portfolios, "/portfolios")
api.add_resource(Products, "/products")
api.add_resource(PortfolioById, "/portfolios/<int:id>")
api.add_resource(ProductById, "/products/<int:id>")
api.add_resource(Login, "/login")
api.add_resource(CheckSession, "/check-session")
api.add_resource(Logout, "/logout")


if __name__ == "__main__":
    app.run(port=5555, debug=True)
