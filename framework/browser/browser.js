//Selenium connection
const {Builder, By, Key} = require('selenium-webdriver');

class Browser {

    async init(browserName) {
        this.driver = await new Builder().forBrowser(browserName).build();
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

    async setTimeout(timeoutValue) {
        return this.driver.manage().setTimeouts({implicit: timeoutValue});
    }

    async windowMaximize() {
        return this.driver.manage().window().maximize();
    }

    async clearField(field) {
        field.sendKeys(Key.CONTROL + "a" + Key.DELETE);
    } 

    async setValue(field, value) {
        field.sendKeys(value);
    }
}

module.exports = Browser;