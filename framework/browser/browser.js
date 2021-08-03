const {Builder, By} = require('selenium-webdriver');
const {testData} = require('../../testData/test.data');

class Browser {

    static async init(browserName) {
        this.driver = await new Builder().forBrowser(browserName).build();
    }

    static async navigate(url) {
        await this.driver.get(url);
    }

    static async goToFrame(framePath) {
        return this.driver.switchTo().frame(this.driver.findElement(framePath));
    }

    static async backFromFrame() {
        return this.driver.switchTo().defaultContent();
    }

    static async setTimeout(timeoutValue = testData.timeoutValue) {
        return this.driver.manage().setTimeouts({implicit: timeoutValue});
    }

    static async windowMaximize() {
        return this.driver.manage().window().maximize();
    }
}

module.exports = Browser;