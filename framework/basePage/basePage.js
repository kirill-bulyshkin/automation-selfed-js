const {By} = require('selenium-webdriver');

class BasePage {
    constructor(browser) {
        this.browser = browser;
    }

    async findElements(locator) {
        return this.browser.driver.findElements(By.xpath(locator));
    }

    async click(element) {
        await element.click();
    }
}

module.exports = BasePage;