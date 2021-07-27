const BaseElement = require("./baseElement");
const {By} = require('selenium-webdriver');

class Link extends BaseElement {
    constructor() {
        super();
        this.browser = browser;
    }

    async getHref(element) {
        await element.getAttribute('href');
    }
}

module.exports = Link;
