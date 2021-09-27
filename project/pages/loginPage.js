const BasePage = require('../../framework/basePage/basePage');
const {locators} = require('../locators/locators');
const TextArea = require('../../framework/baseElement/textArea');
const Button = require('../../framework/baseElement/button');
const Logger = require('../../framework/utils/logger');

class LoginPage extends BasePage {
    get loginField() {return new TextArea('loginField', locators.loginField);}
    get passwordField() {return new TextArea('passwordField', locators.passwordField);}
    get loginButton() {return new Button('loginButton', locators.loginButton);}
    async getWebsiteLanguageButton(languageLocator) {return new Button('websiteLanguageButton', languageLocator);}

    async setLoginValue(value) {
        Logger.infoLog('Set value to login field');
        return this.loginField.setValue(value)
    }

    async setPasswordValue(value) {
        Logger.infoLog('Set value to password field');
        return this.passwordField.setValue(value)
    }

    async loginButtonClick() {
        Logger.infoLog('Click login button');
        return this.loginButton.click()
    }

}

module.exports = LoginPage;