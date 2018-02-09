const request = require('browser-request');

module.exports = {
    get: function(url){
        return new Promise((resolve, reject) => {
            request.get(url, (err, res, body) => {
                body = JSON.parse(body);
                if(err) reject(err);
                else if(body.Error) reject(body.Error);
                else resolve(body);
            })
        })
    },

    post: function(url, data){
        return new Promise((resolve, reject) => {
            request.post({url: url, form: data}, function(err, httpResponse, body){
                if(err) reject(err);
                else if(body.Error) reject(body.Error);
                else resolve(body);
            });
        });
    }
}
