class User:
    def __init__(self, mail, password, _id=None, icons=[], widgets=[]):
        self.mail = mail
        self.password = password
        self.icons = icons
        self.widgets = widgets
        self._id = id(self) if not _id else _id

    def add_icon(self, icon):
        self.icons.append(icon.__dict__)

    def iterator(self, dto=True):
        yield ('_id', self._id)
        yield ('mail', self.mail)
        yield ('icons', self.icons)
        yield ('widgets', self.widgets)
        (yield ('password', self.password)) if not dto else None
