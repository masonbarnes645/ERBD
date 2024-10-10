from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_migrate import Migrate
from os import environ
from flask_session import Session
from flask_restful import Api
from sqlalchemy import MetaData
from flask_bcrypt import Bcrypt



app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db' 
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['ALLOWED_EXTENSIONS'] = {'jpg', 'jpeg', 'png', 'gif'}
metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

api = Api(app)

db = SQLAlchemy(metadata=metadata)
migrate = Migrate(app, db)
db.init_app(app)

app.config["SESSION_TYPE"] = "sqlalchemy"
app.config["SESSION_SQLALCHEMY"] = db
app.config["SESSION_PERMANENT"] = True

app.secret_key = environ.get("SESSION_SECRET")


CORS(app)
Session(app)
bcrypt = Bcrypt(app)


