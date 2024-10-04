from config import app, db
from models.photo import Photo
from models.portfolio import Portfolio
from models.admin import Admin
from models.product import Product
from models.tag import Tag
from models.product_tags import product_tags

from faker import Faker
import random

fake = Faker()


def seed_data():
    with app.app_context():
        
        Photo.query.delete()
        Portfolio.query.delete()
        Product.query.delete()
        Tag.query.delete()




        photos = []
        for _ in range(20):
            photo = Photo(
                portfolio_id = random.randint(1,5),
                image_url = fake.image_url()
            )
            photos.append(photo)
            db.session.add(photo)

        portfolios = []
        for _ in range(5):
            portfolio = Portfolio(
                title = fake.word(),
                description = fake.sentence()

            )
            portfolios.append(portfolio)
            db.session.add(portfolio)

        products = []
        for _ in range(20):
            product = Product(
                name = fake.word(),
                description = fake.sentence(),
                price = fake.random_number()
            )
            products.append(product)
            db.session.add(product)




        db.session.commit()


if __name__ == "__main__":
    seed_data()
        