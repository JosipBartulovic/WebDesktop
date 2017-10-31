from webDesktop.controller.dbController import DbController
from webDesktop.dataModels.user import User


ctrl = DbController('mongodb://127.0.0.1:27017')
usr = User(mail='jolebartulo@gmail.com', password='veginDlakaviChmar', icons=[], widgets=[])
#ctrl.register_user(usr)
ctrl.get_user(21321)