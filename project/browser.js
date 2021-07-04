//Selenium connection
const {Builder, By} = require('selenium-webdriver');

class Browser {
    driver

    async init(name) {
        this.driver = await new Builder().forBrowser(name).build();
    }

    async navigate(url) {
        await this.driver.get(url);
    }

    get goToFrame() {
        return this.driver.switchTo().frame(this.driver.findElement(By.id('mce_0_ifr')));
    }

    get backFromFrame() {
        return this.driver.switchTo().defaultContent();
    }
}

module.exports = Browser;