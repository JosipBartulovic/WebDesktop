const Template = require('../../building_elements/template');

module.exports = (data) => {
    console.log(data)
    return new Template({
        markup:
        `
        <iframe id='widget__{{name}}' frameborder="0" scrolling="no"">
        </iframe>
        <style>
            height: inherit;
            width: inherit;
        </style>
        `,
        data: data
    },

    function(){
        let element = document.createElement('wd-widget')
        element.innerHTML = this.data.code;
        console.log(document.getElementById(`widget__${this.data.name}`).contentWindow.eval(element.getElementsByTagName('script')[0].innerHTML))
        document.getElementById(`widget__${this.data.name}`)
        .setAttribute('srcdoc', element.getElementsByClassName('widg')[0].innerHTML);
    }
); 	
}