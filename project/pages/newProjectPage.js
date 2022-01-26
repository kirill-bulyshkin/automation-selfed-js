const BasePage = require('../../framework/basePage/basePage');
const Browser = require('../../framework/browser/browser');
const Logger = require('../../framework/utils/logger');
const Link = require('../../framework/baseElement/link');
const {newProjectPageLocators} = require('../locators/newProjectPageLocators');
const {until} = require('selenium-webdriver');

class NewProjectPage extends BasePage {

    async _getTestByName(testName) {
        Logger.infoLog('Getting created test by name');
        return new Link('testByName', newProjectPageLocators.newTestName(testName));
    }

    async waitingCreatedTest(testName) {
        return Browser.wait(until.elementLocated(newProjectPageLocators.newTestName(testName)));
    }

    async testByNameIsDisplaying(testName) {
        Logger.infoLog('Checking displaying of the created test by name');
        return (await this._getTestByName(testName)).isElementDisplayed();
    }
    
    async clickOnCreatedTest(testName) {
        Logger.infoLog('Clicking on the created test');
        return (await this._getTestByName(testName)).click();
    }

}

module.exports = NewProjectPage;