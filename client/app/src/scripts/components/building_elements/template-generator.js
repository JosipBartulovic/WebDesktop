const Template = require('../building_elements/template');


module.exports = {
    generate: (markup, dataList, script) => {
        return dataList.map(data => {return new Template({markup: markup, data: data}, script)})
    }
}