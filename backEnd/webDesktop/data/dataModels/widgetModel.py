from os import listdir


class Widget:
    def __init__(self, name, author, _id=None, code=None):
        self.file = open('././././widgets/{0}.html'.format(name), 'r+')
        if code:
            if not name + '.html' in listdir('././././widgets'):
                self.file.write(code)
            else:
                raise FileExistsError('Widget with same name already exists')
        self.name = name
        self.author = author
        self._id = id(self) if not _id else _id

    def iterator(self, return_code=False):
        yield ('_id', self._id)
        yield ('name', self.name)
        yield ('author', self.author)
        (yield ('code', self.file.read())) if return_code else None
