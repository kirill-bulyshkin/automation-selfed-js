const BasePage = require('../../framework/basePage/basePage');
const {navigationBarPageLocators} = require('../locators/navigationBarPageLocators');
const Button = require('../../framework/baseElement/button');
const Logger = require('../../framework/utils/logger');
const Browser = require("../../framework/browser/browser");
const {until} = require('selenium-webdriver');
const {testData} = require("../../testData/test.data");

class NavigationBarPage extends BasePage {

    get myPageButton() {return new Button('myPageButton', navigationBarPageLocators.myPageButton);}

    async myPageButtonClick() {
        Logger.infoLog('Click on My Page Button');
        return this.myPageButton.click()
    }

    async waitingMyPageButton() {
        return Browser.wait(until.elementLocated(navigationBarPageLocators.myPageButton), testData.timeoutValue);
    }
}

module.exports = NavigationBarPage;