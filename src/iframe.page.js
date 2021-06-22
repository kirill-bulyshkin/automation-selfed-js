//Selenium connection
const {By} = require('selenium-webdriver');

class FramePage {
    constructor(browser) {
        this.browser = browser
    }

    get title() {
        return this.browser.driver.findElement(By.css('h3'))
    }

    get editableField() {
       return this.browser.driver.findElement(By.css('p'))
    }

    get boldTextButton() {
        return this.browser.driver.findElement(By.xpath("//button[@title='Bold']"))
    }

    get fontWeight() {
        return this.browser.driver.findElement(By.css('strong')).getCssValue('font-weight')
    }

    get goToFrame() {
        return this.browser.driver.switchTo().frame(this.browser.driver.findElement(By.id('mce_0_ifr')))
    }

    get backFromFrame() {
        return this.browser.driver.switchTo().defaultContent();
    }
}

module.exports = FramePage;