const generator = require('../../../building_elements/template-generator');
const markup = require('./folder-markup');


module.exports = {
    generate: function(dataList) {
        return generator.generate(
            markup, 
            dataList,
            function() {
                let rect = this.element.getBoundingClientRect();
                this.element.setAttribute('draggable', 'true');
                let el = this.element;
                this.rect = rect;
                this.element.addEventListener('drag', function(ev) {
                    el.getElementsByClassName('folder__container')[0].setAttribute('style', `top: ${ev.clientY-rect.top+15}px; left: ${ev.clientX-rect.left}px; cursor: move;`);
                });
                this.element.addEventListener('dragend', function(ev) {
                    el.getElementsByClassName('folder__container')[0].setAttribute('style', `top: ${ev.clientY-rect.top+15}px; left: ${ev.clientX-rect.left}px;`);
                });
                this.element.addEventListener("dragstart", function(e) {
                    console.log(e.clientX);
                    var crt = this.cloneNode(true);
                    crt.style.backgroundColor = "red";
                    crt.style.display = "none";
                    e.dataTransfer.setDragImage(crt, 0, 0);
                }, false);
                this.element.setAttribute('dragover', function(ev) {
                    console.log('DRAGOVER')
                    ev.preventDefault();
                });
                this.element.setAttribute('drop', function(ev){
                    ev.preventDefault();
                    console.log(ev.dataTransfer.getData('text'));
                });
        });
    }
}