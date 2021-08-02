const BaseElement = require("./baseElement");
const {Key} = require('selenium-webdriver');

class TextArea extends BaseElement {

    async clearValue() {
       return (await this.findElement()).clear();
    }

    async setValue(value) {
        return (await this.findElement()).sendKeys(value);
    }
}

module.exports = TextArea;