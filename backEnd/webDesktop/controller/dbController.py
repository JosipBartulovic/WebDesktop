import pymongo
from webDesktop.dataModels.userModel import User


class DbController:
    def __init__(self, db_address):
        self.client = pymongo.MongoClient(db_address)
        self.db = self.client.WebDesktopDB

    def register_user(self, user):
        self.db.Users.insert(user.data)

    def get_user(self, mail):
        return User(next(self.db.Users.find({'mail': mail})))

    def update_user(self, user):
        self.db.Users.update({'mail': user['mail']}, {'$set': user.data})

