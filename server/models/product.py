from models.__init__ import db, SerializerMixin
from models.product_tags import product_tags



class Product(db.Model, SerializerMixin):
    __tablename__ = "products"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    description = db.Column(db.String)
    price = db.Column(db.Float)

    tags = db.relationship("Tag", secondary=product_tags, back_populates="products")

    photos = db.relationship(
        "Photo",
        primaryjoin="and_(Photo.owner_id == foreign(Product.id), Photo.owner_type=='product')",
        backref="product",
        viewonly=True,
    )
    serialize_rules = ("-tags",)


# i think something about the query is not returning the pictures