import pymongo
from os import listdir
from webDesktop.data.dataModels.userModel import User
from webDesktop.data.dataModels.widgetModel import Widget


class DbUserController:
    def __init__(self, db_address='mongodb://127.0.0.1:27017'):
        self.client = pymongo.MongoClient(db_address)
        self.db = self.client.WebDesktopDB

    def register_user(self, user):
        self.db.Users.insert(dict(user.iterator(dto=False)))

    def get_user(self, mail, password):
            user_data = self.db.Users.find_one({'mail': mail, 'password': password})
            if user_data:
                return dict(User(**user_data).iterator())
            return {'Error': 'User "{0}" does not exit'.format(mail)}

    def get_all_users(self):
        return list(map(lambda user_data: dict(User(**user_data).iterator()) ,self.db.Users.find()))

    def update_user(self, user):
        self.db.Users.update({'mail': user['mail']}, {'$set': dict(user.iterator(dto=False))})

    def add_icon_to_user(self, icon, user):
        user.add_icon(icon)
        self.update_user(user)


class DbWidgetController:
    def __init__(self, db_address='mongodb://127.0.0.1:27017'):
        self.client = pymongo.MongoClient(db_address)
        self.db = self.client.WebDesktopDB

    def add_widget(self, widget):
        if widget.name+'.html' in listdir('./././widgets'):
            try:
                self.get_widget(widget.name)['author'] == widget.author
                widget.write_code()
            except KeyError:
                return {'Error': 'Widget with name "{}" already exists'.format(widget.name)}
        else:
            widget.write_code()
            self.db.Widgets.insert_one(dict(widget.iterator()))
        return True

    def get_widget(self, name):
            widget_data = self.db.Widgets.find_one({'name': name})
            if widget_data:
                return dict(Widget(**self.db.Widgets.find_one({'name': name})).iterator(return_code=True))
            return {'Error': 'Widget with name "{0}" does not exit'.format(name)}

    def get_all_widgets(self):
        return list(
            filter(
                lambda widget: not widget['dev'],
                map(
                    lambda widget_data: dict(Widget(**widget_data).iterator(return_code=True)),
                    self.db.Widgets.find()
                )
            )
        )
