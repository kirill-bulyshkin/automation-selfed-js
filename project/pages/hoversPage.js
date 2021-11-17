const BasePage = require('../../framework/basePage/basePage');
const Browser = require("../../framework/browser/browser");
const TextArea = require('../../framework/baseElement/textArea');
const Hover = require('../../framework/baseElement/hover');
const Link = require('../../framework/baseElement/link');
const Logger = require('../../framework/utils/logger');
const {hoversPageLocators} = require('../locators/hoversPageLocators');

class HoversPage extends BasePage {
    constructor() {
        super(hoversPageLocators.hoversTitle);
        this.uniqueLocator = hoversPageLocators.hoversTitle;
    }

    async _getHoverElement(userNumber) {
        Logger.infoLog('Getting hover element');
        return new Hover('hoverElement', hoversPageLocators.hover(userNumber));
    }

    async _getHoverTextField(userNumber) {
        Logger.infoLog('Getting hover element text field');
        return new TextArea('hoverTextField', hoversPageLocators.hoverTextField(userNumber));
    }

    async _getHoverLink(userNumber) {
        Logger.infoLog('Getting hover element link');
        return new Link('hoverLink', hoversPageLocators.hoverLink(userNumber));
    }

    async hoversPageIsDisplayed() {
        Logger.infoLog('Checking displaying of Hovers page');
        return this.isDisplayed();
    }

    async getHoverText(userNumber) {
        Logger.infoLog('Getting hover element text');
        return (await this._getHoverTextField(userNumber)).getText();   
    }

    async hoverLinkIsDisplayed(userNumber) {
        Logger.infoLog('Checking displaying of hover link');
        return (await this._getHoverLink(userNumber)).isElementDisplayed();   
    }

    async hoverLinkClick(userNumber) {
        Logger.infoLog('Clicking on hover link');
        return (await this._getHoverLink(userNumber)).click();  
    }

    async getHoverLinkHref(userNumber) {
        Logger.infoLog('Getting href of hover link');
        return (await this._getHoverLink(userNumber)).getHref();   
    }

    async moveCursorToHover(userNumber) {
        Logger.infoLog('Moving cursor to hover');
        const actions = Browser.driver.actions({async: true});
        let hoverElement = await (await this._getHoverElement(userNumber)).findElement();
        return actions
        .move({origin:hoverElement})
        .perform();
    }

}

module.exports = HoversPage;