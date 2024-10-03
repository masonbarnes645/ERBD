from models.__init__ import db



class Portfolio(db.Model):
    __tablename__= "portfolios"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    photos = db.relationship("Photo", back_populates="portfolio")