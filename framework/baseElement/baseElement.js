const Browser = require('../browser/browser');

class BaseElement {

    constructor(name, locator) {
        this.name = name;
        this.locator = locator;
    }

    async findElement() {
       return Browser.driver.findElement(this.locator);
    }

    async click() {
        return (await this.findElement()).click();
    }

    async getText() {
        return (await this.findElement()).getText();
    }

    async getAttribute(attribute) {
        return (await this.findElement()).getAttribute(attribute);
    }

    async isElementDisplayed() {
        return (await this.findElement()).isDisplayed();
    }

}

module.exports = BaseElement;