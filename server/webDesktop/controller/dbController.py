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

    def get_user_data(self, mail, password):
            user_data = self.db.Users.find_one({'mail': mail, 'password': password})
            if user_data:
                return dict(User(**user_data).iterator())
            return {'Error': 'User "{0}" does not exit'.format(mail)}

    def get_user_object(self, mail):
            user_data = self.db.Users.find_one({'mail': mail})
            if user_data:
                return User(**user_data)
            return {'Error': 'User "{0}" does not exit'.format(mail)}

    def get_all_users(self):
        return list(
            map(
                lambda user_data: dict(User(**user_data).iterator()),
                self.db.Users.find()
            )
        )

    def update_icons(self, user, icons):
        user.icons = icons
        print(user.icons)
        self.update_user(user)
        return True

    def update_user(self, user):
            self.db.Users.update({'mail': user.mail}, {'$set': dict(user.iterator(dto=False))})

    def add_icon_to_user(self, icon):
        user = self.get_user_object(icon.user_mail)
        user.add_icon(icon)
        self.update_user(user)
        return True


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

    def publish_widget(self, author, name):
        widget = self.db.Widgets.find_one({'name': name, 'author': author})
        if widget:
            widget['dev'] = 'false'
            self.db.Widgets.update({'name': widget['name'], 'author': widget['author']}, {'$set': widget})
            return True
        return {'Error': 'Widget with name {} does not exist'.format(name)}

    def get_widget(self, name):
            widget_data = self.db.Widgets.find_one({'name': name})
            if widget_data:
                return dict(Widget(**self.db.Widgets.find_one({'name': name})).iterator(return_code=True))
            return {'Error': 'Widget with name "{}" does not exit'.format(name)}

    def get_all_widgets(self):
        return list(
            filter(
                lambda widget: widget['dev'] == 'false',
                map(
                    lambda widget_data: dict(Widget(**widget_data).iterator(return_code=True)),
                    self.db.Widgets.find()
                )
            )
        )

