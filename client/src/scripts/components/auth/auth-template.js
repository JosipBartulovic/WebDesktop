const Template = require('../template');
const request = require('browser-request');
const requestHandle = require('../handle-request');

module.exports = new Template(
    `
    <input type='text' id='login-mail'> Mail</input>
    </br>
    <input type='password' id='login-password'> Password</input>
    </br>
    <button id='login'>Login</button>
    `,
    
    () => {
        document.getElementById('login').addEventListener('click', () => {
            let mail = document.getElementById('login-mail').value;
            let password = document.getElementById('login-password').value;
            let url = `http://127.0.0.1:5000/user/get?mail=${mail}&password=${password}`;
            request.get(url, (er, res, body) => {
                if(er) console.log(er)  
                else{
                    requestHandle.handle(body)
                        .then((res) => {
                            console.log(res)
                            localStorage.setItem('user', JSON.stringify(res));
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                    }
            });
        });
    }
);
