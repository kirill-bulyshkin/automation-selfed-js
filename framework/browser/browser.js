const {Builder, Capabilities} = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const {testData} = require('../../testData/test.data');
const Logger = require ('../utils/logger');
const {browserLanguage} = require('../../project/configs/configs');

class Browser {

    static async initChrome(browserName) {
        Logger.infoLog('Chrome browser initialization');
        let chromeCapabilities = Capabilities.chrome();
        if (browserLanguage == 'eng') {
            chromeCapabilities.set("goog:chromeOptions", {
                args: ["--lang=en"]
            });
        };
        if (browserLanguage == 'rus') {
            chromeCapabilities.set("goog:chromeOptions", {
                args: ["--lang=ru"]
            });
        };
        this.driver = await new Builder().forBrowser(browserName).withCapabilities(chromeCapabilities).build();
    }
    
    static async initFirefox(browserName) {
        Logger.infoLog('Firefox browser initialization');
        let options;
        if (browserLanguage == 'eng') {
            options = new firefox.Options().setPreference("intl.accept_languages", "en,en-US");
        };
        if (browserLanguage == 'rus') {
            options = new firefox.Options().setPreference("intl.accept_languages", "ru,ru-RU");
        };
        this.driver = await new Builder().forBrowser(browserName).setFirefoxOptions(options).build();
    }

    static async quit() {
        Logger.infoLog('Closing browser');
        await this.driver.quit();
    }

    static async navigate(url) {
        Logger.infoLog('Navigating to URL');
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
        Logger.infoLog('Set timeout');
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

}

module.exports = Browser;