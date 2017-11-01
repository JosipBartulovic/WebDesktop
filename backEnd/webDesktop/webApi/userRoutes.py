from flask.blueprints import Blueprint


user_routes = Blueprint('user_routes', __name__)


@user_routes.route('/test', methods=['GET'])
def test():
    print('toeto')
    return '<h1>TOETO</h1>'

