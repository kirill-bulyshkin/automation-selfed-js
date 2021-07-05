const {By} = require('selenium-webdriver');

class FramePage {
    constructor(browser) {
        this.browser = browser;
    }

    get title() {
        return this.browser.driver.findElement(By.xpath('//h3'));
    }

    get editableField() {
       return this.browser.driver.findElement(By.xpath('//p'));
    }

    get boldTextButton() {
        return this.browser.driver.findElement(By.xpath("//button[@title='Bold']"));
    }

    get fontWeight() {
        return this.browser.driver.findElement(By.xpath('//strong')).getCssValue('font-weight');
    }
}

module.exports = FramePage;