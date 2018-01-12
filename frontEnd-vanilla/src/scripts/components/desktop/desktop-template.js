const Template = require('../template');

module.exports = new Template(
    `
    <wd-icons></wd-icons>
    <wd-widgets>Desktoooop</wd-widgets>
    `,
    () => {
        console.log("CHR")
    }
);