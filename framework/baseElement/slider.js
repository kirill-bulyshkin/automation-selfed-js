const BaseElement = require('./baseElement');
const Logger = require('../utils/logger');
const Browser = require('../browser/browser');

class Slider extends BaseElement {

    async dragAndDropSlider(x) {
        Logger.infoLog('Drag and drop slider');
        const actions = Browser.driver.actions({async: true});
        return actions.dragAndDrop(this.findElement(), {x: x, y: 0}).perform();
    }

}

module.exports = Slider;