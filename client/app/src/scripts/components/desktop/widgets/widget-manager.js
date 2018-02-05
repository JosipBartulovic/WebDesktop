"use strict";

const request = require('browser-request');
const requestHandle = require('../../handle-request');

module.exports = {
    getWidget: function(name){
        return requestHandle.get(`http://127.0.0.1:5000/widget/get?name=${name}`);
    },

    getWidgetList: () => {
        return requestHandle.get('http://127.0.0.1:5000/widget/get/all');
    }
}