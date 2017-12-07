from flask import Flask
from webDesktop.webApi.userRoutes import user_routes
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.register_blueprint(user_routes)
