const fs = require('fs');

module.exports = function(){
    if(fs.existsSync('widget.json')){
        return JSON.parse(fs.readFileSync('widget.json', 'utf-8'));
        
    }else{
        throw Error('Could not find widget.json');
    }
}