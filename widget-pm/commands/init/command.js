const fs = require('fs');
const rl = require('readline-sync')
const auth = require('./authenticate');

module.exports = function(){
    const widget = {}

    widget.author = rl.question('Mail: ');
    
    auth(widget.author, rl.question('Password: ', { hideEchoBack: true}));

    widget.name = rl.question('Widget name: ');

    if(!fs.existsSync(widget.name)){
        fs.mkdirSync(widget.name);   
        fs.writeFileSync(`./${widget.name}/widget.json`, JSON.stringify(widget));
        fs.writeFileSync(
            `./${widget.name}/widget.html`,
            `<div>
            This is your first widget;
        </div>
        
        
        
        <script>
        </script>
        
        
        
        <style></style>
        </style>`
        );
    }else{
        throw(Error(`Folder with name ${widget.name} already exists`));
    }

}