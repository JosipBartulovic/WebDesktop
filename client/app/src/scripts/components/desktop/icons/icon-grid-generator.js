const Template = require('../../building_elements/template');
const generator = require('../../building_elements/template-generator');


module.exports = {
    generate: () => {
        return generator.generate('', [{smth: 1}], function(){ this.element.className = 'grid__element'});
    }
}