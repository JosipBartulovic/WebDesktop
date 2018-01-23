const Template = require('../../template');


module.exports = (data) => {
    return new Template({markup: '<div>Author: {{author}} <button>Download</button></div>', data: data},
    function(){
        console.log("OWWW YEAAAAAAAAH");
    }    
);
}