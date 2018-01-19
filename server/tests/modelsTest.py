from webDesktop.data.dataModels.userModel import User


us = User(mail='chmar', icons=[], widgets = [], password = [])
us.model_to_dto(us)