
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_migrate import Migrate
from os import environ
from flask_session import Session
from flask_restful import Api
from sqlalchemy import MetaData
from flask_bcrypt import Bcrypt
from dotenv import load_dotenv
load_dotenv()




app = Flask(
    __name__,
    static_url_path="",
    static_folder="../ERB-client/dist",
    template_folder="../ERB-client/dist"

    )
app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('SQLALCHEMY_DATABASE_URI')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

api = Api(app, prefix="/api/v1")

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

app.config['S3_ACCESS_KEY'] = environ.get('S3_ACCESS_KEY')
app.config['S3_SECRET_KEY'] = environ.get('S3_SECRET_KEY')
app.config['S3_BUCKET'] = 'eb-design'
app.config['S3_REGION'] = 'us-west-1'



app.config['UPLOAD_FOLDER'] = 'uploads/'
ALLOWED_EXTENSIONS =  {'png', 'jpg', 'jpeg'}
app.config['MAX_CONTENT_LENGTH'] = 50 * 1024 * 1024



app.secret_key = environ.get("SESSION_SECRET")



CORS(app)
bcrypt = Bcrypt(app)
Session(app)    




