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
}

module.exports = FramePage;