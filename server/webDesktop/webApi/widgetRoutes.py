from flask.blueprints import Blueprint
from flask import request
from flask import jsonify

from webDesktop.data.dataModels.widgetModel import Widget
from webDesktop .controller.dbController import DbWidgetController

widget_routes = Blueprint('widget_routes', __name__, url_prefix='/widget')


def form_data_normalizer(form_data):
    return dict(
        map(
            lambda a: (a[0], a[1][0]),
            list(dict(form_data).items())
        )
    )


@widget_routes.route('/test', methods=['GET'])
def test():
    print('Test')
    return jsonify("TestTest")


@widget_routes.route('/push', methods=['POST'])
def add_widget():
    request.form = form_data_normalizer(request.form)
    widget = Widget(**request.form)
    return jsonify(DbWidgetController().add_widget(widget))


@widget_routes.route('/publish', methods=['POST'])
def publish_widget():
    request.form = form_data_normalizer(request.form)
    return jsonify(DbWidgetController().publish_widget(**request.form))


@widget_routes.route('/push', methods=['POST'])
def push_widget():
    return jsonify(DbWidgetController().get_widget(request.args['name']))


@widget_routes.route('/get', methods=['GET'])
def get_widget():
    return jsonify(DbWidgetController().get_widget(request.args['name']))


@widget_routes.route('/get/all', methods=['GET'])
def get_all_widgets():
    return jsonify(DbWidgetController().get_all_widgets())
