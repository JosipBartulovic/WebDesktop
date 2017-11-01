from flask import Flask
from webDesktop.webApi.userRoutes import user_routes


app = Flask(__name__)
app.register_blueprint(user_routes)
