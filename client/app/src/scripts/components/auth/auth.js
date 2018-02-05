const authTemplate = require('./auth-template');

module.exports = {
    authNeeded: function(){
        return window.localStorage.getItem('user') == null
    },
    
    renderAuth: function(){
        authTemplate.clearAndRender();
    }
}