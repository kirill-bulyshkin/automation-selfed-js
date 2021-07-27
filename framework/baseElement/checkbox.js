const BaseElement = require("./baseElement");
const {By} = require('selenium-webdriver');

class Checkbox extends BaseElement {
    constructor() {
        super();
        this.browser = browser;
    }

    async checkboxSelected(element) {
        await element.isSelected();
    }

    async checkboxDisplayed(element) {
        await element.isDisplayed();
    }

    async checkboxEnabled(element) {
        await element.isEnabled();
    }
}

module.exports = Checkbox;