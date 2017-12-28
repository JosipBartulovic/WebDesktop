const request = require('request')
const storage = require('./storage');

module.exports = function(mail, password, callback){
    var body = ''
    request.get(`http://127.0.0.1:5000/user/get?mail=${mail}&password=${password}`)
        .on('data', (data) => {
            body += data;
        })
        .on('end', () => {
            if(!body.Error) {
                storage.setUser(body);
            }else{
                throw(body.Error)
            }
        })
}