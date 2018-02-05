const Template = require('../template');
const requestHandle = require('../handle-request');

module.exports = new Template(
    {
        markup:
            `
            <input type='text' id='login-mail'> Mail</input>
            </br>
            <input type='password' id='login-password'> Password</input>
            </br>
            <button id='login'>Login</button>
            `,
        data:{ podatak: 20 }
    },

    () => {
        document.getElementById('login').addEventListener('click', () => {
            let mail = document.getElementById('login-mail').value;
            let password = document.getElementById('login-password').value;
            let url = `http://127.0.0.1:5000/user/get?mail=${mail}&password=${password}`;
            requestHandle.get(url)
            .then((res) => { 
                localStorage.setItem('user', JSON.stringify(res)); 
                location.reload()
            })
            .catch((err) =>{ console.log(err); });
        });
    }
);
