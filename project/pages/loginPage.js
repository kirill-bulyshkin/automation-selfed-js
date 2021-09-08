const BasePage = require("../../framework/basePage/basePage");
const {locators} = require("../locators/locators");
const TextArea = require("../../framework/baseElement/textArea");
const Button = require("../../framework/baseElement/button");
const Browser = require("../../framework/browser/browser");
const {until} = require('selenium-webdriver');

class LoginPage extends BasePage {
    get loginField() {return new TextArea('loginField', locators.loginField);}
    get passwordField() {return new TextArea('passwordField', locators.passwordField);}
    get loginButton() {return new Button('loginButton', locators.loginButton);}
    async getWebsiteLanguageButton(languageLocator) {return new Button('websiteLanguageButton', languageLocator);}

    async setLoginValue(value) {
        return this.loginField.setValue(value)
    }

    async setPasswordValue(value) {
        return this.passwordField.setValue(value)
    }

    async loginButtonClick() {
        return this.loginButton.click()
    }

    async setWebsiteLanguage(languageLocator) {
        return (await this.getWebsiteLanguageButton(languageLocator)).click()
    }

    async waitingSwitchingToEnglish() {
        return Browser.wait(until.elementLocated(locators.engLoginField), 8000);
    }
    
}

module.exports = LoginPage;