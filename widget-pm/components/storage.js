var storage = require('node-persist');

module.exports = storage.initSync();
module.exports = {
    getUser: () => {
        return JSON.parse(storage.getItemSync('user'));
    },
    setUser: (user) => {
        storage.setItemSync('user', user);
    }
}