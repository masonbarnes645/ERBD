from models.__init__ import db



class Admin(db.Model):
    __tablename__= "admin"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    _password_hash = db.Column("password", db.String)