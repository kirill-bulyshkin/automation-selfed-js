const Browser = require('../browser/browser');
const Logger = require('../utils/logger');

class BasePage {
    constructor(uniqueLocator) {
        this.uniqueLocator = uniqueLocator;
    }

    async findElements(locator) {
        Logger.infoLog('Finding elements');
        return Browser.driver.findElements(locator);
    }

    async isDisplayed() {
        Logger.infoLog('Checking displaying of element');
        return Browser.driver.findElement(this.uniqueLocator).isDisplayed();
    }
}

module.exports = BasePage;