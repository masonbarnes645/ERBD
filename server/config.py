
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_migrate import Migrate
from os import environ
from flask_session import Session
from flask_restful import Api
from sqlalchemy import MetaData
from flask_bcrypt import Bcrypt
import os



app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db' 
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

api = Api(app)

db = SQLAlchemy(metadata=metadata)
migrate = Migrate(app, db)
db.init_app(app)
SWAGGER_URL = '/api/docs'
API_URL = 'http://127.0.0.1:5555/swagger.json'

app.config["SESSION_TYPE"] = "sqlalchemy"
app.config["SESSION_SQLALCHEMY"] = db
app.config["SESSION_PERMANENT"] = True

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USERNAME'] = 'ebarnesdesigninquiry@gmail.com'
app.config['MAIL_PASSWORD'] = 'vdau opqm knse cvub'
app.config['MAIL_DEFAULT_SENDER'] = 'ebarnesdesigninquiry@gmail.com'
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False


app.config['UPLOAD_FOLDER'] = 'uploads/'
ALLOWED_EXTENSIONS =  {'png', 'jpg', 'jpeg'}
app.config['MAX_CONTENT_LENGTH'] = 50 * 1024 * 1024



app.secret_key = environ.get("SESSION_SECRET")



CORS(app)
Session(app)    
bcrypt = Bcrypt(app)




