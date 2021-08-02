const BaseElement = require("./baseElement");

class Checkbox extends BaseElement {

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