const request = require('request')
const storage = require('./storage');

module.exports = function(mail, password){
    var body = ''
    request.get(`http://127.0.0.1:5000/user/get?mail=${mail}&password=${password}`)
        .on('data', (data) => {
            body += data;
        })
        .on('end', () => {
            body = JSON.parse(body);
            if(!body.Error) {
                storage.setUser(body);
            }else{
                throw(body.Error)
            }
        })
}