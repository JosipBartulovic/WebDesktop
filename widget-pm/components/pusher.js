"use strict";

const request = require('request');
const fs = require('fs');
const storage = require('./storage');

module.exports = {
    push: function(name, file) {
        let body = '';
        let url = 'http://127.0.0.1:5000/widget/push';
        let request_data = {
            author: storage.getUser().mail, 
            name: name, 
            code: fs.readFileSync(file, 'utf-8'), dev: true
        };
        
        request.post(url, {form: request_data})
            .on('data', (data) => {
                body += data;
                body = JSON.parse(body);
            })
            .on('end', () => {
                if(body.Error){ throw(Error(body.Error)); }
                console.log('Finished')
            })
    }
}