from os import listdir

class Widget:
    def __init__(self, name, vue, author, _id=None):
        if name+'.vue' in listdir('././././widgets'):
            raise FileExistsError('Widget with same name already exists')
        self.name = name
        self.author = author
        self.file_dir = '././././widgets/{0}.vue'.format(name)
        self.vue = open('././././widgets/{0}.vue'.format(name), 'w')
        self.vue.write(vue)
        self._id = id(self) if not self._id else _id

