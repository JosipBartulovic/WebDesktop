"use strict";

const request = require('request');
const get_profile = require('../push/profile-get');

module.exports = function(){
        let url = 'http://127.0.0.1:5000/widget/publish';
        let body = ''
        let request_data = {
            author: get_profile().author, 
            name: get_profile().name
        };
        request.post(url, {form: request_data})
            .on('data', (data) => {
                body += data;
            })
            .on('end', () => {
                body = JSON.parse(body)
                if(body.Error)
                    console.log(body.Error);
                else
                    console.log("...finished");
            })
    }
