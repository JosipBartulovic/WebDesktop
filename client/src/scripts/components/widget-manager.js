"use strict";

var request = require('browser-request');

module.exports = {
    getWidget: function(name){
        request(`http://127.0.0.1:5000/widget/get?name=${name}`, (er, { body }) => {
            if(JSON.parse(body).Error){
                console.log(JSON.parse(body).Error);
            }else{
                body = JSON.parse(body);
                let widget = document.createElement('widget');
                widget.innerHTML += body.code;
                document.getElementById('widgets').appendChild(widget);
                setTimeout(widget.getElementsByTagName('script')[0].innerHTML, 1);
            }
        });
    }
}