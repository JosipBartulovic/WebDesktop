import pymongo
from flask_mail import Message


class DbController:
    def __init__(self, db_address):
        self.client = pymongo.MongoClient(db_address)
        self.db = self.client.get_database('WebDesktop')

    def register_user(self, user):
        self.db.Users.insert(user.data)

    def get_user(self, email):
        for ele in 




