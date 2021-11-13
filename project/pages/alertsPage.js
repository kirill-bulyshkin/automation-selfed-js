const BasePage = require('../../framework/basePage/basePage');
const {alertsPageLocators} = require('../locators/alertsPageLocators');
const Button = require('../../framework/baseElement/button');
const TextArea = require('../../framework/baseElement/textArea');
const Logger = require('../../framework/utils/logger');
const Browser = require("../../framework/browser/browser");
const {until} = require('selenium-webdriver');
const {testData} = require("../../testData/test.data");

class AlertsPage extends BasePage {
    constructor() {
        super(alertsPageLocators.alertsTitle);
        this.uniqueLocator = alertsPageLocators.alertsTitle;
    }

    get jsAlertButton() {return new Button('jsAlertButton', alertsPageLocators.alertButton);}

    get jsConfirmButton() {return new Button('jsConfirmButton', alertsPageLocators.confirmButton);}

    get jsPromptButton() {return new Button('jsPromptButton', alertsPageLocators.promptButton);}

    async resultTextField() {
        return new TextArea('resultTextField', alertsPageLocators.resultSection);
    }

    async alertsPageIsDisplayed() {
        return this.isDisplayed();
    }

    // get myPageButton() {return new Button('myPageButton', navigationBarPageLocators.myPageButton);}

    async jsAlertButtonClick() {
        Logger.infoLog('Click on jsAlertButton');
        return this.jsAlertButton.click()
    }

    async jsConfirmButtonClick() {
        Logger.infoLog('Click on jsConfirmButton');
        return this.jsConfirmButton.click()
    }

    async jsPromptButtonClick() {
        Logger.infoLog('Click on jsPromptButton');
        return this.jsPromptButton.click()
    }
    
    async getAlertText() {
        Logger.infoLog('Get text from alert');
        return (await Browser.switchToAlert()).getText();
    }

    async acceptAlert() {
        Logger.infoLog('Accepting alert');
        return (await Browser.switchToAlert()).accept();
    }

    async alertIsPresent() {
        Logger.infoLog('Checking displaying of alert');
        try
        {
            await Browser.switchToAlert();
            return true;
        }
        catch (NoAlertPresentException)
        {
            return false;
        }
    }

    async getResultText() {
        Logger.infoLog('Getting text of result field');
        return (await this.resultTextField()).getText();
    }

    async sendKeysToAlert(keys) {
        Logger.infoLog('Sending keys to alert text field');
        return (await Browser.switchToAlert()).sendKeys(keys);
    }

    // async getSuccessfullAuthText() {
    //     Logger.infoLog(`Getting text of successfull authorization`);
    //     return (await this.successfullAuthTextField()).getText();
    // }

    // async waitingMyPageButton() {
    //     return Browser.wait(until.elementLocated(navigationBarPageLocators.myPageButton), testData.timeoutValue);
    // }
}

module.exports = AlertsPage;