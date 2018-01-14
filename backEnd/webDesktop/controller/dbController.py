import pymongo
from webDesktop.data.dataModels.userModel import User
from webDesktop.data.dataModels.widgetModel import Widget

def _getter():
    pass


class DbUserController:
    def __init__(self, db_address='mongodb://127.0.0.1:27017'):
        self.client = pymongo.MongoClient(db_address)
        self.db = self.client.WebDesktopDB

    def register_user(self, user):
        self.db.Users.insert(user.__dict__)

    def get_user(self, mail, password):
        try:
            user_data = self.db.Users.find_one({'mail': mail, 'password': password})
            return User.model_to_dto(User(**user_data))
        except StopIteration:
            return {'Error': 'User "{0}" does not exit'.format(mail)}

    def get_all_users(self):
        return self.db.Users.find()

    def update_user(self, user):
        self.db.Users.update({'mail': user['mail']}, {'$set': user.__dict__})

    def add_icon_to_user(self, icon, user):
        user.add_icon(icon)
        self.update_user(user)


class DbWidgetController:
    def __init__(self, db_address='mongodb://127.0.0.1:27017'):
        self.client = pymongo.MongoClient(db_address)
        self.db = self.client.WebDesktopDB

    def add_widget(self, widget):
        self.db.Widgets.insert_one(dict(widget))

    def get_widget(self, name):
        try:
            return dict(Widget(**self.db.Widgets.find_one({'name': name})))
        except StopIteration:
            return {'Error': 'Widget with name "{0}" does not exit'.format(name)}

