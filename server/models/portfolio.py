from models.__init__ import db, SerializerMixin
from sqlalchemy.orm import foreign


class Portfolio(db.Model, SerializerMixin):
    __tablename__ = "portfolios"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    description = db.Column(db.String)

    photos = db.relationship(
        "PortfolioPhoto",
        primaryjoin="and_(Photo.owner_id == foreign(Portfolio.id), Photo.owner_type=='portfolio')",
        backref="portfolio",
        viewonly=True,
        lazy='select',
        uselist=True
    )

# add an 'order' integer column, sort by this column