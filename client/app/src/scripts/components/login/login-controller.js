const loginTemplate = require('./login-template');



module.exports = {
    isLogedIn: function(){
        return window.localStorage.getItem('user') == null
    },
    
    renderLoginScreen: function(){
        loginTemplate.clearAndRender();
    }
}