from webDesktop.data.DTO.userDTO import UserDTO


class User:
    def __init__(self, *args, **kwargs):
        if not kwargs:
            self.__dict__ = args[0]
        else:
            self.__dict__ = kwargs

    def add_icon(self, icon):
        self.data['icons'].append(icon.data)

    @staticmethod
    def model_to_dto(user):
        return UserDTO(user)

    @staticmethod
    def dto_to_model(dto, get_user_callback):
        return get_user_callback(dto['mail'])
