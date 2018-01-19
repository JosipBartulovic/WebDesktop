"use strict";

require('./components/init');
const widgetMng = require('./components/widget-manager');
const auth = require('./components/auth/auth')
const desktop = require('./components/desktop/desktop-template')

window.onload = function () {
    if (auth.authNeeded()){
        auth.renderAuth();
    }else{
        desktop.clearAndRender();
    }
};