from webDesktop import app
from flask import jsonify


@app.route('/test')
def test():
    return jsonify({'Test': 1})

