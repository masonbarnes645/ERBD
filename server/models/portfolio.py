from models.__init__ import db, SerializerMixin



class Portfolio(db.Model, SerializerMixin):
    __tablename__= "portfolios"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    description = db.Column(db.String)



    photos = db.relationship("Photo", back_populates="portfolio")

    serialize_rules = ("-photos",)