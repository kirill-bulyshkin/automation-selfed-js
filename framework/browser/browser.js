const {Builder} = require('selenium-webdriver');
const {testData} = require('../../testData/test.data');
const fs = require('fs');
const fetch = require('node-fetch');
const Logger = require ('../utils/logger');

class Browser {

    static async init(browserName) {
        this.driver = await new Builder().forBrowser(browserName).build();
    }

    static async quit() {
        await this.driver.quit();
    }

    static async navigate(url) {
        await this.driver.get(url);
    }

    static async switchToFrame(framePath) {
        return this.driver.switchTo().frame(this.driver.findElement(framePath));
    }

    static async switchToDefault() {
        return this.driver.switchTo().defaultContent();
    }

    static async setTimeout(timeoutValue = testData.timeoutValue) {
        return this.driver.manage().setTimeouts({implicit: timeoutValue});
    }

    static async windowMaximize() {
        return this.driver.manage().window().maximize();
    }

    static async wait(condition) {
        return this.driver.wait(condition)
    }

    static async downloadImageByUrl(url, pathToFile) {
        const response = await fetch(url);
        const buffer = await response.buffer();
        fs.writeFile(pathToFile, buffer, () => 
        Logger.infoLog('Image is downloaded'));
    }
}

module.exports = Browser;