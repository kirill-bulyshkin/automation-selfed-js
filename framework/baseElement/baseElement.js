const {By} = require('selenium-webdriver');

class BaseElement {

    // async click(element) {
    //     await element.click();
    // }

    async isDisplayed(element) {
        await element.isDiplayed();
    }

    async getElementText(element) {
        await element.getText();
    }

}

module.exports = BaseElement;



