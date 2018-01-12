from os import listdir


class Widget:
    def __init__(self, name, author, _id=None, vue=None):
        if vue and not name + '.html' in listdir('././././widgets'):
            open('././././widgets/{0}.html'.format(name), 'w').write(vue)
        else:
            raise FileExistsError('Widget with same name already exists')
        self.name = name
        self.author = author
        self._id = id(self) if not _id else _id

