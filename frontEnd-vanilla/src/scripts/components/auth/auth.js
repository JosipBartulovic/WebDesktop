const authTemplate = require('./auth-template');

module.exports = {
    authNeeded: function(){
        return window.localStorage.getItem('User') == null
    },
    
    renderAuth: function(){
        authTemplate.clearAndRender();
    }
}