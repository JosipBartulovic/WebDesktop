"use strict";

const request = require('request')
const storage = require('./storage')

module.exports = {
    publish: function(name){
        request.post('http://127.0.0.1:5000/widget/push', {form:{'author': storage.getUser().mail, 'name': name}})
            .on('data', (data) => {
                console.log(data);
            })
    }
}