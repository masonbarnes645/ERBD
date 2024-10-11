from models.__init__ import db
from sqlalchemy import ForeignKey



class Photo(db.Model):
    __tablename__= "photos"

    id = db.Column(db.Integer, primary_key=True)
    file_path= db.Column(db.String, nullable=False)
    owner_type = db.Column(db.String, nullable=False)
    owner_id = db.Column(db.Integer, nullable=False)



    __mapper_args__ = {
        'polymorphic_on': owner_type
    }