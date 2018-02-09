class Icon:
    def __init__(self, name, url, image_url, user_mail, child, position, type, _id=None):
        self.url = url
        self.name = name
        self.image_url = image_url
        self.user_mail = user_mail
        self.type = type
        self._id = id(self) if not _id else _id
        self.child = child
        self.position = position

    def iterator(self):
        yield ('_id', self._id)
        yield ('name', self.name)
        yield ('url', self.url)
        yield ('image_url', self.image_url)
        yield ('type', self.type)
        yield ('child', self.child)
        yield ('position', self.position)