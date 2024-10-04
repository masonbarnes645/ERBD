from models.__init__ import db



class Portfolio(db.Model):
    __tablename__= "portfolios"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    description = db.Column(db.String)


    photos = db.relationship("Photo", back_populates="portfolio")