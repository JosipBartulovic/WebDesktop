const Template = require('../../building_elements/template');
const widgetMng = require('./widget-manager');
const widget = require('./widget-generator');


module.exports = (data) => {
    return new Template({
        markup: 
            `<div>
            Name: {{name}}
            </br>
            Author: {{author}}
            </bar>
            <button Id='widget__get__{{name}}'>Download</button></div>
            `, 
        data: data
    },

    function(){
        document.getElementById(`widget__get__${this.data.name}`)
        .addEventListener('click', () => {
            widgetMng.getWidget(this.data.name)
            .then((resp) => {
                this.appendChild(widget(resp));
            })
        })
    }    
);
}