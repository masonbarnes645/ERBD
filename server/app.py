from flask_restful import Resource
import os
from config import app

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get("DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")

from models.photo import Photo
from models.portfolio import Portfolio
from models.admin import Admin
from models.product import Product
from models.tag import Tag

# class Portfolios(Resource):
#     def get(self):




if __name__ == "__main__":
    app.run(port=5555, debug=True)
