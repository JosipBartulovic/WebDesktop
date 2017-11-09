from webDesktop.data.dataModels.model import Model


class UserDTO(Model):
    def __init__(self, mail, icons, widgets):
        self.data = dict(mail=mail, icons=icons, widgets=widgets)

