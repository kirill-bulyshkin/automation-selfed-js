const BaseElement = require('./baseElement');
const Logger = require('../utils/logger');

class Link extends BaseElement {

    async getHref(element) {
        Logger.infoLog('Getting link of element');
        await element.getAttribute('href');
    }

}

module.exports = Link;