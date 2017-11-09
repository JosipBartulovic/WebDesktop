from webDesktop.data.dataModels import model
from webDesktop.data.DTO.userDTO import UserDTO


class User(model.Model):
    def __init__(self, user_data=None, **kwargs):
        if not user_data:
            self.data = kwargs
        else:
            self.data = user_data
        assert (list(self.data.keys()) == ['mail', 'password', 'icons', 'widgets'] or
                list(self.data.keys()) == ['_id', 'mail', 'password', 'icons', 'widgets'])
        if not self['_id']:
            self.data['_id'] = id(self)

    def __repr__(self):
        return str(self.data)

    def add_icon_id(self, icon_id):
        self.data['iconIds'].append(icon_id.data)

    @staticmethod
    def model_to_dto(user):
        return UserDTO(mail=user['mail'], icons=user['icons'], widgets=user['widgets'])

    @staticmethod
    def dto_to_model(dto, get_user_callback):
        return get_user_callback(dto['mail'])
