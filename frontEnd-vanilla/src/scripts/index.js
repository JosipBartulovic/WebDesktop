"use strict";

require('./components/init');
const widgetMng = require('./components/widget-manager');
const auth = require('./components/auth/auth')

window.onload = function () {
    if (auth.authNeeded()){
        auth.renderAuth();
    }else{
        
    }
};