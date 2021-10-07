const BasePage = require('../../framework/basePage/basePage');
const {loginPageLocators} = require('../locators/loginPageLocators');
const TextArea = require('../../framework/baseElement/textArea');
const Button = require('../../framework/baseElement/button');
const Logger = require('../../framework/utils/logger');

class LoginPage extends BasePage {
    get loginField() {return new TextArea('loginField', loginPageLocators.loginField);}
    get passwordField() {return new TextArea('passwordField', loginPageLocators.passwordField);}
    get loginButton() {return new Button('loginButton', loginPageLocators.loginButton);}

    async authorize(login, password) {
        this.setLoginValue(login);
        this.setPasswordValue(password);
        this.loginButtonClick(); 
    }

    async setLoginValue(login) {
        Logger.infoLog(`Set value to login field '${login}'`);
        return this.loginField.setValue(login)
    }

    async setPasswordValue(password) {
        Logger.infoLog(`Set value to password field '${password}'`);
        return this.passwordField.setValue(password)
    }

    async loginButtonClick() {
        Logger.infoLog('Click login button');
        return this.loginButton.click()
    }

}

module.exports = LoginPage;