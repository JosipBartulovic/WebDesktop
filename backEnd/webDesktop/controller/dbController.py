import pymongo
from webDesktop.data.dataModels.userModel import User


class DbController:
    def __init__(self, db_address='mongodb://127.0.0.1:27017'):
        print(db_address)
        self.client = pymongo.MongoClient(db_address)
        self.db = self.client.WebDesktopDB

    def register_user(self, user):
        self.db.Users.insert(user.data)

    def get_user(self, mail):
        return User.model_to_dto(User(next(self.db.Users.find({'mail': mail}))))

    def get_all_users(self):
        return self.db.Users.find()

    def update_user(self, user):
        self.db.Users.update({'mail': user['mail']}, {'$set': user.data})
