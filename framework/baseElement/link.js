const BaseElement = require("./baseElement");
const {By} = require('selenium-webdriver');

class Link extends BaseElement {

    async getHref(element) {
        await element.getAttribute('href');
    }

}

module.exports = Link;
