class Widget:
    def __init__(self, name, author, dev, _id=None, code=None):
        self.file = '././././widgets/{0}.html'.format(name)
        self.name = name
        self.author = author
        self.dev = dev
        self.code = code
        self._id = id(self) if not _id else _id

    def iterator(self, return_code=False):
        (yield ('_id', self._id)) if not return_code else None
        yield ('dev', self.dev)
        yield ('name', self.name)
        yield ('author', self.author)
        (yield ('code', self.read_code())) if return_code else None

    def write_code(self):
        with open(self.file, 'w') as file:
            file.write(self.code)

    def read_code(self):
        with open(self.file, 'r') as file:
            return file.read()
