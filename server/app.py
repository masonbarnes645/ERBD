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
        

class Products(Resource):
    def get(self):
        try:
            return make_response([product.to_dict() for product in Product.query], 200)
        except Exception as e:
            return make_response({"error": str(e)}, 404)
        

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



api.add_resource(Portfolios, "/portfolios")
api.add_resource(Products, "/products")
api.add_resource(PortfolioById, "/portfolios/<int:id>")
api.add_resource(ProductById, "/products/<int:id>")


if __name__ == "__main__":
    app.run(port=5555, debug=True)
