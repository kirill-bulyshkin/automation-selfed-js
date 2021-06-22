//Selenium connection
const {Builder} = require('selenium-webdriver');

class Browser {
    driver

    async init(name) {
        this.driver = await new Builder().forBrowser(name).build();
    }

    async navigate(url) {
        await this.driver.get(url)
    }
}

module.exports = Browser;