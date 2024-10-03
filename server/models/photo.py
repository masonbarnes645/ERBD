from models.__init__ import db



class Photo(db.Model):
    __tablename__= "photos"

    id = db.Column(db.Integer, primary_key=True)
    portfolio_id = db.Column(db.Integer, db.ForeignKey('portfolios.id'))


    portfolio = db.relationship("Portfolio", back_populates="photos")