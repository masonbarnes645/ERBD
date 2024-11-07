from models.__init__ import db, bcrypt, SerializerMixin, hybrid_property



class Admin(db.Model, SerializerMixin):
    __tablename__= "admin"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String)
    _password_hash = db.Column("password", db.String)


    def authenticate(self, pass_check):
        return bcrypt.check_password_hash(self._password_hash, pass_check)  

    @property
    def password(self):
        raise AttributeError("Password is not a readable attribute")
    @password.setter
    def password(self, password):
        self._password_hash = bcrypt.generate_password_hash(password).decode('utf-8')




