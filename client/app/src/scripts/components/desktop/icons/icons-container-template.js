const Template = require('../../building_elements/template');
const icons = require('./icon_generator/icon-generator');
const folder = require('./folder_generator/folder-generator');
const requestHandle = require('../../building_elements/handle-request');


module.exports = new Template(
    {markup: ``},
    function(){
        this.element.className = 'wd__icons';
        let mail = JSON.parse(window.localStorage.getItem('user')).mail;
        let url = `http://127.0.0.1:5000/user/get_icons?mail=${mail}`
        requestHandle.get(url)
            .then(res => {
                console.log(res);
                let user = JSON.parse(window.localStorage.getItem('user'));
                user.icons = res;
                window.localStorage.setItem('user', JSON.stringify(user));
                
                iconData = JSON.parse(window.localStorage.getItem('user')).icons;
                iconData = iconData.filter(ele => ele.type == 'folder' )
                folder.generate(iconData).forEach(element => {
                    this.appendChild(element);
                });
                
                let iconData = JSON.parse(window.localStorage.getItem('user')).icons;
                iconData = iconData.filter(ele => ele.type == 'icon' )
                icons.generate(iconData).forEach(element => {
                    this.appendChild(element);
                    console.log(element);
                });
                
            })



        let addFolder = document.getElementsByClassName('footer__button--first')[0];
        let el = this;
        addFolder.addEventListener('click', function() {
            let icon = {
                url: '',
                name: 'Folder',
                user_mail: JSON.parse(window.localStorage.getItem('user')).mail,
                image_url: '',
                type: 'folder',
                child: [],
                position: [0,0]
            };
        requestHandle.post('http://127.0.0.1:5000/user/append_icon', icon)
        .then((res) => {
            let user = JSON.parse(window.localStorage.getItem('user'));
            user.icons.push(icon);
            window.localStorage.setItem('user', JSON.stringify(user));
        });
            let fld = folder.generate([icon])[0]
            el.appendChild(fld);
        });

        window.addEventListener('beforeunload', function() {
            let iconList = JSON.parse(window.localStorage.getItem('user')).icons;
            console.log(iconList)
            iconList = iconList.map(ele => {
                ele.data.position = [ele.rect.left, ele.rect.top];
                
            })
            let user = JSON.parse(window.localStorage.getItem('user'));
            let data = {
                icons: JSON.stringify(iconList),
                mail: user.mail
            }
            requestHandle.post('http://127.0.0.1:5000/user/update_icons', data)
            .then((res) => {
                console.log('exiting');
            })
        })

        let deleteBt = document.getElementsByClassName('delete__button')[0];
        deleteBt.setAttribute('dragover', (ev) => {
            ev.preventDefault();
            console.log('chmar');
        });
        deleteBt.setAttribute('drop', (ev) => {
            ev.preventDefault();
            console.log('DROP');
        });
})