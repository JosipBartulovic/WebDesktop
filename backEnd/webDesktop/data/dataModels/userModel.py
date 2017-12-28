from webDesktop.data.DTO.userDTO import UserDTO


class User:
    def __init__(self, mail, password, _id=None, icons=[], widgets=[]):
        self.mail = mail
        self.password = password
        self.icons = icons
        self.widgets = widgets
        self._id = id(self) if not self._id else _id

    def add_icon(self, icon):
        self.icons.append(icon.__dict__)

    @staticmethod
    def model_to_dto(user):
        return UserDTO(user)

    @staticmethod
    def dto_to_model(dto, get_user_callback):
        return get_user_callback(dto['mail'])
