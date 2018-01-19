from webDesktop.controller.dbController import DbController
from webDesktop.data.dataModels.userModel import User


# ctrl = DbController('mongodb://127.0.0.1:27017')
# usr = User(mail='jolebartulo@gmail.com', password='veginDlakaviChmar', icons=[], widgets=[])
# ctrl.register_user(usr)
# x = (ctrl.get_user('jolebartulo@gmail.com'))
# usr['password'] = 'NovijaSifra'
# ctrl.update_user(usr)
# for x in ctrl.db.Users.find():
#     print(x)

ctrl = DbController()
print(DbController().get_user('jolebartulo@gmail.com'))
