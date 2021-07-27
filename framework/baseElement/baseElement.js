const {By} = require('selenium-webdriver');

class BaseElement {

    async clickElement(element) {
        await element.click();
    }

    async elementIsDisplayed(element) {
        await element.isDiplayed();
    }

    async getElementText(element) {
        await element.getText();
    }

}

module.exports = BaseElement;



