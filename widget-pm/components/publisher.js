"use strict";

const request = require('request')
const storage = require('./storage')

module.exports = {
    publish: function(name){
        let url = 'http://127.0.0.1:5000/widget/publish';
        let body = ''
        let request_data = {
            author: storage.getUser().mail, 
            name: name
        };
        request.post(url, {form: request_data})
            .on('data', (data) => {
                body += data;
            })
            .on('end', () => {
                console.log(body);
            })
    }
}