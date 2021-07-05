//Selenium connection
const {Builder, By} = require('selenium-webdriver');

class Browser {
    constructor(browserName) {
        this.browserName = browserName;
    }

    async init() {
        this.driver = await new Builder().forBrowser(this.browserName).build();
    }

    async navigate(url) {
        await this.driver.get(url);
    }

    async goToFrame(framePath) {
        return this.driver.switchTo().frame(this.driver.findElement(By.xpath(framePath)));
    }

    async backFromFrame() {
        return this.driver.switchTo().defaultContent();
    }
}

module.exports = Browser;