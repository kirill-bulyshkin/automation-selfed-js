const {By} = require('selenium-webdriver');
const Browser = require('../browser/browser');

class BasePage {
    constructor(uniqueLocator) {
        this.uniqueLocator = uniqueLocator;
    }

    async findElements(locator) {
        return Browser.driver.findElements(locator);
    }

    async isDisplayed() {
        return Browser.driver.findElement(this.uniqueLocator).isDisplayed();
    }
}

module.exports = BasePage;