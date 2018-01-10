"use strict";

require('./components/init');
const widgetMng = require('./components/widget-manager');
const Template = require('./components/template');

window.onload = function () {
    document.getElementById('getWidget')
    .addEventListener('click', () => {
        widgetMng.getWidget('test');
        widgetMng.getWidget('testis');
    });
};