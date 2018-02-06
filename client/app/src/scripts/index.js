"use strict";

require('./components/init');
const login = require('./components/login/login-controller');
const desktop = require('./components/desktop/desktop-template');
const animate = require('./components/building_elements/animations');


window.onload = function () {
    if (login.isLogedIn()){
        login.renderLoginScreen();
    }else{
        desktop.clearAndRender();
    }
};