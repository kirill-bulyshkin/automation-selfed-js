const BaseElement = require('./baseElement');
const Logger = require('../utils/logger');

class Link extends BaseElement {

    async getHref() {
        Logger.infoLog(`Getting link of element`);
        return (await this.findElement()).getAttribute('href');
    }

}

module.exports = Link;