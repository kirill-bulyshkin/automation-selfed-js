const BasePage = require("../../framework/basePage/basePage");
const {locators} = require("../locators/locators");
const TextArea = require("../../framework/baseElement/textArea");
const Button = require("../../framework/baseElement/button");

class LoginPage extends BasePage {
    // constructor() {
    //     super(locators.loginForm);
    //     this.uniqueLocator = locators.loginForm;
    // }

    get loginField() {return new TextArea('loginField', locators.loginField);}
    get passwordField() {return new TextArea('passwordField', locators.passwordField);}
    get loginButton() {return new Button('loginButton', locators.loginButton)}

    async setLoginValue(value) {
        return this.loginField.setValue(value)
    }

    async setPasswordValue(value) {
        return this.passwordField.setValue(value)
    }

    async loginButtonClick() {
        return this.loginButton.click()
    }
}

module.exports = LoginPage;