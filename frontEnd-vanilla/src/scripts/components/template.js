module.exports = function Template(markup){
    this.element = document.createElement('wd-template')
    this.element.innerHTML = markup

    this.addToDocument = function(){
        console.log(this.element.innerHTML);
        document.getElementById('render').appendChild(this.element)
    }

    this.removeFromDocument = function(){
        document.body.removeChild(this.element);
    }
}