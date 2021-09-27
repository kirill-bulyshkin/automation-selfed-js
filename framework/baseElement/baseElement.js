const Browser = require('../browser/browser');
const Logger = require('../utils/logger');

class BaseElement {

    constructor(name, locator) {
        this.name = name;
        this.locator = locator;
    }

    async findElement() {
        Logger.infoLog('Finding element');
        return Browser.driver.findElement(this.locator);
    }

    async click() {
        Logger.infoLog('Click on element');
        return (await this.findElement()).click();
    }

    async getText() {
        Logger.infoLog('Getting text of element');
        return (await this.findElement()).getText();
    }

    async getAttribute(attribute) {
        Logger.infoLog('Getting attribute of element');
        return (await this.findElement()).getAttribute(attribute);
    }

    async isElementDisplayed() {
        Logger.infoLog('Checking displaying of element');
        return (await this.findElement()).isDisplayed();
    }

}

module.exports = BaseElement;