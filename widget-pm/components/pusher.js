"use strict";

const request = require('request');
const fs = require('fs');
const storage = require('./storage');

module.exports = {
    push: function(name, file) {
        request.post
        ('http://127.0.0.1:5000/widget/add', 
        {form:{author: storage.getUser().mail, name: name, vue: fs.readFileSync(file, 'utf-8')}});
    }
}