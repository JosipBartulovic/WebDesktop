class Model:
    def __getitem__(self, item):
        try:
            return self.data[item]
        except:
            return None

    def __setitem__(self, key, value):
        if key in list(self.data.keys()):
            self.data[key] = value
        else:
            raise KeyError("Key does not exist")

    data = dict()
