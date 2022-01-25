const BasePage = require('../../framework/basePage/basePage');
const Browser = require('../../framework/browser/browser');
const Logger = require('../../framework/utils/logger');
const {nexageProjectPageLocators} = require('../locators/nexageProjectPageLocators');
const {until} = require('selenium-webdriver');

class NexageProjectPage extends BasePage {

    async waitingStartTimesFields() {
        return Browser.wait(until.elementLocated(nexageProjectPageLocators.testsStartTimes));
    }

    // async getStartTimes() {
    //     Logger.infoLog('Getting start times');
    //     let elements = await this.findElements(nexageProjectPageLocators.testsStartTimes);
    //     let startTimes = [];
    //     elements.forEach(function(element, i) {
    //         // let startTimes = [];
    //         startTimes.push(element.getText());
    //         console.log(`${i + 1} StartTime on the page is ${startTimes}`);
    //         return;
    //     });
    //     return console.log(startTimes);
    // }

    async getTestsNamesFromUi() {
        Logger.infoLog('Getting tests names from page');
        let elements = await this.findElements(nexageProjectPageLocators.testsNames);
        let testsNames = [];
        for (let element of elements) {
            testsNames.push(await element.getText());
        };
        return testsNames;
    }

    async getStartTimesFromUi() {
        Logger.infoLog('Getting start times');
        let elements = await this.findElements(nexageProjectPageLocators.testsStartTimes);
        let startTimes = [];
        for (let element of elements) {
            startTimes.push(await element.getText());
        };
        return startTimes;
    }


    // async getStartTimesFieldsText() {
    //     Logger.infoLog('Getting start times fields text');
    //     return await(this._getStartTimesFields());
    // }

}

module.exports = NexageProjectPage;