const BasePage = require('../../framework/basePage/basePage');
const Browser = require("../../framework/browser/browser");
const {until} = require('selenium-webdriver');
const {loginPageLocators} = require('../locators/loginPageLocators');
const TextArea = require('../../framework/baseElement/textArea');
const Button = require('../../framework/baseElement/button');
const Logger = require('../../framework/utils/logger');
const { alertIsPresent } = require('selenium-webdriver/lib/until');

class LoginPage extends BasePage {

    async successfullAuthTextField() {
        return new TextArea('successfullAuthTextField', loginPageLocators.successfullAuthTextField);
    }
    // get passwordField() {return new TextArea('passwordField', loginPageLocators.passwordField);}
    // get loginButton() {return new Button('loginButton', loginPageLocators.loginButton);}

    // async authorize(login, password) {
    //     this.setLoginValue(login);
    //     this.setPasswordValue(password);
    //     this.loginButtonClick(); 
    // }

    // async setLoginValue(login) {
    //     Logger.infoLog(`Set value to login field '${login}'`);
    //     return this.loginField.setValue(login)
    // }

    // async setPasswordValue(password) {
    //     Logger.infoLog(`Set value to password field '${password}'`);
    //     return this.passwordField.setValue(password)
    // }

    // async loginButtonClick() {
    //     Logger.infoLog('Click login button');
    //     return this.loginButton.click()
    // }

    // async alertAuthenticate() {
    //     Logger.infoLog('Alert autentification');
    //     return this.
    // }

    // async waitingMyPageButton() {
    //     return Browser.wait(until.elementLocated(navigationBarPageLocators.myPageButton), testData.timeoutValue);
    // }
    async getSuccessfullAuthText() {
        Logger.infoLog(`Getting text of successfull authorization`);
        return (await this.successfullAuthTextField()).getText();
    }

    // async waitingAlert() {
    //     return Browser.wait(until.alertIsPresent());
    // }
}

module.exports = LoginPage;