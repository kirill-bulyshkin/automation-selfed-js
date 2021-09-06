const BasePage = require("../../framework/basePage/basePage");
const {locators} = require("../locators/locators");
// const TextArea = require("../../framework/baseElement/textArea");
const Button = require("../../framework/baseElement/button");

class NavigationBarPage extends BasePage {
    // constructor() {
    //     super(locators.loginForm);
    //     this.uniqueLocator = locators.loginForm;
    // }

    get myPageButton() {return new Button('myPageButton', locators.myPageButton);}

    async myPageButtonClick() {
        return this.myPageButton.click()
    }
}

module.exports = NavigationBarPage;