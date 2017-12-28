from flask.blueprints import Blueprint
from flask import request
from flask import jsonify
from webDesktop.controller.dbController import DbUserController


user_routes = Blueprint('user_routes', __name__, url_prefix='/user')


@user_routes.route('/test', methods=['GET'])
def test():
    print('Test')
    return jsonify("TestTest")


@user_routes.route('/get', methods=['GET'])
def get_user():
    user = DbUserController().get_user(request.args['mail'], request.args['password'])
    if not user:
        return jsonify({'Error': 'Wrong email or password'})
    else:
        return jsonify(user.__dict__)
