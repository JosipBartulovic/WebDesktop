const Template = require('../building_elements/template');
const requestHandle = require('../building_elements/handle-request');
const animate = require('../building_elements/animations');
const desktop = require('../desktop/desktop-template');

const markup =  
    `
    <div class="background background--blur"></div>
    <div class="login__shade"></div>
    <div class="login__content">
        <div class="login__container">
            <input class="input" type="text" placeholder="E-mail"></input>
            <input class="input" type="password" placeholder="Password"></input>
            <div class="login__accept">log in</div>
            <div class="login__signin">Don't have an account? SIGN UP!</div>
        </div>
    </div>
    `

const script = function() {
    let login_button = this.element.getElementsByClassName('login__accept')[0];
    let [mail, password] = document.getElementsByClassName('input');
    
    login_button.addEventListener('click', () => {
        let url = `http://127.0.0.1:5000/user/get?mail=${mail.value}&password=${password.value}`;
        requestHandle.get(url)
            .then((res) => { 
                localStorage.setItem('user', JSON.stringify(res)); 
                animate.fade_out(this, 0.4, () => {
                    desktop.clearAndRender();
                });
            })
            .catch((err) =>{ console.log(err); });
    });
}

module.exports = new Template(
    {
        markup: markup, 
        data: { podatak: 20 }
    }, 
    script);
