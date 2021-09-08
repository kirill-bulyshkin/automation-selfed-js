const BasePage = require("../../framework/basePage/basePage");
const {locators} = require("../locators/locators");
const Button = require("../../framework/baseElement/button");

class NavigationBarPage extends BasePage {

    get myPageButton() {return new Button('myPageButton', locators.myPageButton);}

    async myPageButtonClick() {
        return this.myPageButton.click()
    }
}

module.exports = NavigationBarPage;