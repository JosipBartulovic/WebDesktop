from webDesktop.dataModels import model


class Icon(model.Model):
    def __init__(self):
        self.data = dict(_id=None, url=None, image=None)
