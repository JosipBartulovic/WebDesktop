const Template = require('../template');
const widgets = require('./widgets/widgets-template');


module.exports = new Template({
    markup:
    `
        <wd-icons></wd-icons>
    `
    },
    function(){
        this.appendChild(widgets);
    }
);