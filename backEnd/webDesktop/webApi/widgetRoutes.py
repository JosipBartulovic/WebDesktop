from flask.blueprints import Blueprint
from flask import request
from flask import jsonify
from webDesktop.data.dataModels.widgetModel import Widget
from webDesktop .controller.dbController import DbWidgetController

widget_routes = Blueprint('widget_routes', __name__, url_prefix='/widget')


@widget_routes.route('/test', methods=['GET'])
def test():
    print('Test')
    return jsonify("TestTest")


@widget_routes.route('/add', methods=['POST'])
def add_widget():
    try:
        widget = Widget(
            request.form['name'],
            request.form['vue'],
            request.form['author']
        )
    except KeyError:
        return {'Error': 'Invalid request'}
    DbWidgetController().add_widget(widget)
    return jsonify(True)
