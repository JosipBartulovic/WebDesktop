from webDesktop.dataModels import model


class User(model.Model):
    def __init__(self, user_data=None, **kwargs):
        if not user_data:
            self.data = kwargs
        else:
            self.data = user_data
        assert list(self.data.keys()) == ['mail', 'password', 'icons', 'widgets']

    def __repr__(self):
        return str(self.data)

    def add_icon_id(self, icon_id):
        self.data['iconIds'].append(icon_id.data)
