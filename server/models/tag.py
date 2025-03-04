from models.__init__ import db, SerializerMixin
from models.product_tags import product_tags

class Tag(db.Model, SerializerMixin):
    __tablename__ = "tags"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    products = db.relationship("Product", secondary=product_tags, back_populates="tags")