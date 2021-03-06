module.exports = function Template({markup, data}, script, parent=null){
 
    for(let key in data){
        let replace = `{{${key}}}`;
        markup = markup.replace(new RegExp(replace, 'g'), data[key]);
    }
    
    this.script = script.bind(this);
    self.parent = parent;
    this.data = data;
    this.element = document.createElement('wd-template')
    this.element.innerHTML = markup;


    this.addToRender = () => {
        document.getElementById('render').innerHTML = '';
        document.getElementById('render').appendChild(this.element);
    }

    this.clearAndRender = () => {
        document.getElementById('render').innerHTML = '';
        document.getElementById('render').appendChild(this.element);
        this.script();
    }

    this.clearSelf = () => {
        this.element.innerHTML = '';
    }

    this.removeFromDocument = () => {
        document.body.removeChild(this.element);
    }

    this.appendChild = (template) => {
        this.element.appendChild(template.element);
        template.script();
    }
}