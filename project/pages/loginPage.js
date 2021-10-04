const BasePage = require('../../framework/basePage/basePage');
const {loginPageLocators} = require('../locators/loginPageLocators');
const TextArea = require('../../framework/baseElement/textArea');
const Button = require('../../framework/baseElement/button');
const Logger = require('../../framework/utils/logger');

class LoginPage extends BasePage {
    get loginField() {return new TextArea('loginField', loginPageLocators.loginField);}
    get passwordField() {return new TextArea('passwordField', loginPageLocators.passwordField);}
    get loginButton() {return new Button('loginButton', loginPageLocators.loginButton);}

    async setLoginValue(value) {
        Logger.infoLog(`Set value to login field '${value}'`);
        return this.loginField.setValue(value)
    }

    async setPasswordValue(value) {
        Logger.infoLog(`Set value to password field '${value}'`);
        return this.passwordField.setValue(value)
    }

    async loginButtonClick() {
        Logger.infoLog('Click login button');
        return this.loginButton.click()
    }

}

module.exports = LoginPage;