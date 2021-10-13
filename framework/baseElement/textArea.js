const BaseElement = require('./baseElement');
const Logger = require('../utils/logger');

class TextArea extends BaseElement {

    async clearValue() {
        Logger.infoLog('Clearing text area');
        return (await this.findElement()).clear();
    }

    async setValue(value) {
        Logger.infoLog(`Set value '${value}' to text area`);
        return (await this.findElement()).sendKeys(value);
    }
}

module.exports = TextArea;