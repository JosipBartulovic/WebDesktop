"use strict";

const request = require('request');
const fs = require('fs');
const storage = require('./storage');

module.exports = {
    push: function(name, file) {
        let body = '';
        request.post('http://127.0.0.1:5000/widget/push',
        {form:{author: storage.getUser().mail, name: name, code: fs.readFileSync(file, 'utf-8'), dev: true}})
        .on('data', (data) => {
            body += data;
        })
        .on('end', () => {
            if(JSON.parse(body).Error){
                throw(Error(JSON.parse(body).Error));
            }
            console.log('Finished')
        })
    }
}