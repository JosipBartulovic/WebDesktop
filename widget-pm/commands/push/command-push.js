"use strict";

const request = require('request');
const fs = require('fs');
const get_profile = require('./profile-get');

module.exports = function() {
        let widget = get_profile();
        let body = '';
        let url = 'http://127.0.0.1:5000/widget/push';
        let request_data = {
            author: widget.author, 
            name: widget.name, 
            code: fs.readFileSync('widget.html', 'utf-8'), dev: true
        };
        
        request.post(url, {form: request_data})
            .on('data', (data) => {
                body += data;
                body = JSON.parse(body);
            })
            .on('end', () => {
                if(body.Error){ throw(Error(body.Error)); }
                console.log('...finished')
            })
    }
