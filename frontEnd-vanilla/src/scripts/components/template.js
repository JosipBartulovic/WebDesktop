module.exports = function Template(markup, script){
    this.element = document.createElement('wd-template')
    this.element.innerHTML = markup

    this.addToRender = function(){
        document.getElementById('render').appendChild(this.element)
        script();
    }

    this.clearAndRender = function(){
        document.getElementById('render').innerHTML = '';
        document.getElementById('render').appendChild(this.element)
        script();
    }

    this.removeFromDocument = function(){
        document.body.removeChild(this.element);
    }
}