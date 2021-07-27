const BaseElement = require("./baseElement");
const {By} = require('selenium-webdriver');

class Button extends BaseElement {
    constructor() {
        super();
        this.browser = browser;
    }
}

module.exports = Button;