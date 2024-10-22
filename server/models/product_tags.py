from models.__init__ import db

product_tags = db.Table('product_tags',
    db.Column('product_id', db.Integer, db.ForeignKey('products.id'), unique=False),
    db.Column('tag_id', db.Integer, db.ForeignKey('tags.id' ), unique=False))
