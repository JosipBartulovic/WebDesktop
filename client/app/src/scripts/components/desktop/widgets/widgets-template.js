const Template = require('../../template');
const widgetMng = require('./widget-manager');
const widgetPreview = require('./preview-widget-template-generator');


module.exports = new Template({
    markup:
        `<wd-widgets>
            <button id='w-get'>Get me the widgets</button>
        </wd-widgets>

        `},
        
    function(){
        document.getElementById('w-get').addEventListener('click', () => {
            widgetMng.getWidgetList()
            .then((resp) => {
                resp.forEach((element) => {
                    this.appendChild(widgetPreview(element));
                });
            })
        });
    }
);