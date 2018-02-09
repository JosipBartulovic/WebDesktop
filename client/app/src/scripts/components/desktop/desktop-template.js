const Template = require('../building_elements/template');
const widgets = require('./widgets/widgets-template');
const markup = require('./desktop-markup');
const iconsContainer = require('./icons/icons-container-template');
const toolbar = require('./toolbar/toolbar-template');
const store = require('../store/store-template');
const animate = require('../building_elements/animations');


module.exports = new Template(
    {markup: markup},
    function(){
        this.appendChild(toolbar);
        this.appendChild(iconsContainer);
        let dis = this;
        let storeBtn = document.getElementsByClassName('footer__button--second')[0];
        storeBtn.addEventListener('click', () => {
            animate.fade_out(this, 1, ()=>{
                let bckBtn = store.element.getElementsByClassName('back__button')[0];
                bckBtn.addEventListener('click', function(){
                    animate.fade_out(store, 1, () => {
                        dis.addToRender();
                        dis.element.setAttribute(
                            'style', 
                            `
                            transition: all ease-in 0.5s;
                            opacity: 1;
                            `);
                    });
                })
                store.addToRender();
                store.element.setAttribute(
                    'style', 
                    `
                    transition: all ease-in 0.5s;
                    opacity: 1;
                    `);
            });
        });
        
    }
);