import pymongo
from webDesktop.data.dataModels.userModel import User

class DbUserController:
    def __init__(self, db_address='mongodb://127.0.0.1:27017'):
        self.client = pymongo.MongoClient(db_address)
        self.db = self.client.WebDesktopDB

    def register_user(self, user):
        self.db.Users.insert(user.__dict__)

    def get_user(self, mail, password):
        try:
            user_data = next(self.db.Users.find({'mail': mail, 'password': password}))
        except StopIteration:
            return None

        else:
            return User.model_to_dto(User(
                user_data['mail'],
                user_data['password'],
                _id=user_data['_id'],
                icons=user_data['icons'],
                widgets=user_data['widgets']
            ))

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
        self.db.Widgets.insert_one({'_id': widget._id,
                                    'name': widget.name,
                                    'author': widget.author})

    def get_widget(self, name):
        try:
            return {'widget': next(self.db.Widgets.find({'name': name})),
                    'code': open('././widgets/{0}.html'.format(name), 'r').read()}
        except StopIteration:
            return {'Error': 'Widget with name "{0}" does not exit'.format(name)}

