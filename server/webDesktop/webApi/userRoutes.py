from flask.blueprints import Blueprint
from flask import request
from flask import jsonify
from webDesktop.controller.dbController import DbUserController
from webDesktop.data.dataModels.iconModel import Icon
import json


user_routes = Blueprint('user_routes', __name__, url_prefix='/user')


def form_data_normalizer(form_data):
    return dict(
        map(
            lambda a: (a[0], a[1][0]),
            list(dict(form_data).items())
        )
    )


@user_routes.route('/test', methods=['GET'])
def test():
    print('Test')
    return jsonify("TestTest")


@user_routes.route('/get', methods=['GET'])
def get_user():
    return jsonify(DbUserController().get_user_data(request.args['mail'], request.args['password']))


@user_routes.route('/append_widget', methods=['POST'])
def append_widget():
    request.form = form_data_normalizer(request.form)
    user = DbUserController().get_user_object(request.form['mail'])
    user.add_widget(request.form['widget'])
    DbUserController().update_user(user)
    return jsonify(True)


@user_routes.route('/append_icon', methods=['POST'])
def append_icon():
    request.form = form_data_normalizer(request.form)
    print(request.form)
    icon = Icon(**request.form)
    return jsonify(DbUserController().add_icon_to_user(icon))


@user_routes.route('/update_icons', methods=['POST'])
def update_icons():
    request.form = form_data_normalizer(request.form)
    print("PAD{OASDASJDASJD")
    icons = json.loads(request.form['icons'])
    print('KOI KURAC')
    print(icons)
    print(request.form)
    user = DbUserController().get_user_object(request.form['mail'])
    return jsonify(DbUserController().update_icons(user, icons))


@user_routes.route('/get_icons', methods=['GEt'])
def get_icons():
    user = DbUserController().get_user_object(request.args['mail'])
    return jsonify(user.icons)
