const BasePage = require('../../framework/basePage/basePage');
const Logger = require('../../framework/utils/logger');
const Label = require('../../framework/baseElement/label');
const Image = require('../../framework/baseElement/image');
const {newTestPageLocators} = require('../locators/newTestPageLocators');

class NewTestPage extends BasePage {

    async _getAddedLogsField(logs) {
        Logger.infoLog('Getting field of the added logs');
        return new Label('testByName', newTestPageLocators.addedLogs(logs));
    }

    async _getAddedAttachField(attach) {
        Logger.infoLog('Getting field of the added attach');
        return new Image('testByName', newTestPageLocators.addedAttach(attach));
    }

    async addedLogsIsDisplaying(logs) {
        Logger.infoLog('Checking displaying of the added attach');
        return (await this._getAddedLogsField(logs)).isElementDisplayed();
    }

    async addedAttachIsDisplaying(attach) {
        Logger.infoLog('Checking displaying of the added attach');
        return (await this._getAddedAttachField(attach)).isElementDisplayed();
    }

}

module.exports = NewTestPage;