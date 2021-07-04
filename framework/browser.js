//Selenium connection
const {Builder, By} = require('selenium-webdriver');

class Browser {
    constructor(browserName, url) {
        this.browserName = browserName;
        this.url = url;
    }

    async init() {
        this.driver = await new Builder().forBrowser(this.browserName).build();
    }

    async navigate() {
        await this.driver.get(this.url);
    }

    get goToFrame() {
        return this.driver.switchTo().frame(this.driver.findElement(By.id('mce_0_ifr')));
    }

    get backFromFrame() {
        return this.driver.switchTo().defaultContent();
    }
}

module.exports = Browser;