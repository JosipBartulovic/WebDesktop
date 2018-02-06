const Template = require('../building_elements/template');
const widgets = require('./widgets/widgets-template');
const markup = require('./desktop-markup');


module.exports = new Template(
    {markup: markup},
    function(){    
    }
);