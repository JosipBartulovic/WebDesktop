const generator = require('../../../building_elements/template-generator');
const markup = require('./icon-markup');


module.exports = {
    generate: function(dataList) {
        return generator.generate(
            markup, 
            dataList,
            function() {
                console.log(this.data.position)
                this.element.getElementsByClassName('icon__container')[0].setAttribute('style', `top: ${this.data.position[1]}px; left: ${this.data.position[0]}px; cursor: move;`);
                let favicon = this.element.getElementsByClassName('icon__favicon')[0];
                favicon.setAttribute('style', `background-image: url(${this.data.image_url})`);
                let url = this.data.url;
                let rect = this.element.getBoundingClientRect();
                this.rect = rect;
                this.element.addEventListener('click', function() {
                    window.open(url);
                });
                this.element.setAttribute('draggable', 'true');
                let el = this.element;
                
                this.element.addEventListener('drag', function(ev) {
                    el.getElementsByClassName('icon__container')[0].setAttribute('style', `top: ${ev.clientY-rect.top+15}px; left: ${ev.clientX-rect.left}px; cursor: move;`);
                });
                this.element.addEventListener('dragend', function(ev) {
                    ev.preventDefault();
                    el.getElementsByClassName('icon__container')[0].setAttribute('style', `top: ${ev.clientY-rect.top+15}px; left: ${ev.clientX-rect.left}px;`);
                });
                this.element.addEventListener("dragstart", function(e) {
                    var crt = this.cloneNode(true);
                    crt.style.backgroundColor = "red";
                    crt.style.display = "none";
                    e.dataTransfer.setDragImage(crt, 0, 0);
                    e.dataTransfer.setData('text', this.data);
                }, false);
        });
    }
}