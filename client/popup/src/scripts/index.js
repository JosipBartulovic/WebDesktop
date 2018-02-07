const requestHandle = require('./handle-request');


window.onload = function() {
    document.getElementsByClassName('button__add')[0]
        .addEventListener('click', () => {
            chrome.tabs.getSelected(
                function(arg) {
                    postIcon(arg);
                })        
        })
}

function postIcon(tab){
    let icon = {
        url: tab.url,
        name: tab.title,
        user_mail: JSON.parse(window.localStorage.getItem('user')).mail,
        image_url: tab.favIconUrl
    };
    console.log(icon);
    requestHandle.post('http://127.0.0.1:5000/user/append_icon', icon)
        .then((res) => {
            console.log(res);
        });
}
