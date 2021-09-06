const {Builder, until} = require('selenium-webdriver');
const {testData} = require('../../testData/test.data');
const {locators} = require('../../project/locators/locators');

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

    // static async setTimeout2() {
    //     return this.driver.wait(until.elementLocated(By.xpath(`//div[contains(@id,'7928')]`)), 30000);
    // }

    static async windowMaximize() {
        return this.driver.manage().window().maximize();
    }

    //добавить wait.Located для всего элемента (поста)
    
    static async waitingExpectedPostText(postId, text) {
        return this.driver.wait(until.elementTextIs(
           await this.driver.findElement(locators.findPostTextField(postId)), text), 5000);
    }
}

module.exports = Browser;