const Browser = require('../browser/browser');

class BaseElement {

    constructor(name, locator) {
        this.name = name;
        this.locator = locator;
    }

    async click() {
        return (await this.findElement()).click();
    }

    async isDisplayed(element) {
        await element.isDiplayed();
    }

    async getText() {
        return (await this.findElement()).getText();
    }

    async findElement() {
       return Browser.driver.findElement(this.locator);
    }

}

module.exports = BaseElement;



