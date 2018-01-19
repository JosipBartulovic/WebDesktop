from flask import jsonify
import json

class dog:
    def __init__(self):
        self.name = 'Zuca'
        self.sex = 'M'


pas = dog()
print(json.dumps(pas.__dict__))