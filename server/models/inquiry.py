from models.__init__ import db, SerializerMixin


class Inquiry(db.Model, SerializerMixin):
    __tablename__ = "inquiries"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    subject = db.Column(db.String)
    email = db.Column(db.String)
    message = db.Column(db.String)