var storage = require('node-persist');

module.exports = storage.initSync();
module.exports = {
    getUser: () => {
        let user = storage.getItemSync('user');
        if(user){
            return JSON.parse(storage.getItemSync('user'));
        }else{
            return undefined;
        }
    },
    setUser: (user) => {
        storage.setItemSync('user', user);
    }
}