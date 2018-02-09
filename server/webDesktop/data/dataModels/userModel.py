class User:
    def __init__(self, mail, password, _id=None, icons=[], widgets=[]):
        self.mail = mail
        self.password = password
        self.icons = icons
        self.widgets = widgets
        self._id = id(self) if not _id else _id

    def add_icon(self, icon):
        self.icons.append(icon.__dict__)

    def add_widget(self, widget_name):
        if widget_name not in self.widgets:
            self.widgets.append(widget_name)

    def add_icon(self, icon):
        sgelf.icons.append(dict(icon.iterator()))

    def iterator(self, dto=True):
        yield ('_id', self._id)
        yield ('mail', self.mail)
        yield ('icons', self.icons)
        yield ('widgets', self.widgets)
        (yield ('password', self.password)) if not dto else None
