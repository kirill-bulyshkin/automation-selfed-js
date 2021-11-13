// require('chromedriver');
// require('geckodriver');
const {Builder, Capabilities} = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const {testData} = require('../../testData/test.data');
const Logger = require ('../utils/logger');
const configs = require('../../project/configs/configs.json');

class Browser {

    static async initBrowser(browserName) {
        if (browserName == 'chrome') {
            Logger.infoLog('Chrome browser initialization');
            let chromeCapabilities = Capabilities.chrome();
            chromeCapabilities.set("goog:chromeOptions", {args: [`--lang=${configs.browserLanguage}`]});
            this.driver = await new Builder().forBrowser(browserName).withCapabilities(chromeCapabilities).build();
        }

        if (browserName == 'firefox') {
            Logger.infoLog('Firefox browser initialization');
            let options = new firefox.Options().setPreference('intl.accept_languages', `${configs.browserLanguage},${configs.browserLanguage}`);
            this.driver = await new Builder().forBrowser(browserName).setFirefoxOptions(options).build();
        }
    }
    
    static async quit() {
        Logger.infoLog('Closing browser');
        await this.driver.quit();
    }

    static async navigate(url) {
        Logger.infoLog(`Navigating to URL ${url}`);
        await this.driver.get(url);
    }

    static async switchToFrame(framePath) {
        Logger.infoLog('Switching to frame');
        return this.driver.switchTo().frame(this.driver.findElement(framePath));
    }

    static async switchToDefault() {
        Logger.infoLog('Return from frame');
        return this.driver.switchTo().defaultContent();
    }

    static async setTimeout(timeoutValue = testData.timeoutValue) {
        Logger.infoLog(`Set timeout '${timeoutValue}'`);
        return this.driver.manage().setTimeouts({implicit: timeoutValue});
    }

    static async windowMaximize() {
        Logger.infoLog('Maximazing of window');
        return this.driver.manage().window().maximize();
    }

    static async wait(condition) {
        Logger.infoLog('Waiting for condition completing');
        return this.driver.wait(condition);
    }

    static async switchToAlert() {
        Logger.infoLog('Switching to alert');
        return this.driver.switchTo().alert();
    }

    // static async alertAuthenticate(login, password) {
    //     Logger.infoLog('Alert autentification');
    //     return (await this.switchToAlert()).authenticateAs(login, password)
    // }

    // static async sleep() {
    //     return this.driver.sleep(1000)
    // }

}

module.exports = Browser;