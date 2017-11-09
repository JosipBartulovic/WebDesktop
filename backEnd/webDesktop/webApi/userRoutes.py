from flask.blueprints import Blueprint
from flask import request
import json
from bson import ObjectId
from webDesktop.controller.dbController import DbController


user_routes = Blueprint('user_routes', __name__, url_prefix='/user')


@user_routes.route('/test', methods=['GET'])
def test():
    print('Test')
    return '<h1>Dlakavi Chmar</h1>'


@user_routes.route('/get', methods=['GET'])
def get_user():
    return json.dumps(DbController().get_user(request.args['mail']).data)