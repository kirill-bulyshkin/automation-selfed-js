const BasePage = require('../../framework/basePage/basePage');
const Browser = require("../../framework/browser/browser");
const TextArea = require('../../framework/baseElement/textArea');
const Button = require('../../framework/baseElement/button');
const Logger = require('../../framework/utils/logger');
const {iFramePageLocators} = require('../locators/iFramePageLocators');
const {Key} = require('selenium-webdriver');
const {until} = require('selenium-webdriver');
const {testData} = require('../../testData/test.data');


class IFramePage extends BasePage {
    constructor() {
        super(iFramePageLocators.iFrameTitle);
        this.uniqueLocator = iFramePageLocators.iFrameTitle;
    }

    get _moreButton() {return new Button('moreButton', iFramePageLocators.moreButton);}
    get _alignLeftButton() {return new Button('alignLeftButton', iFramePageLocators.alignLeftButton);}
    get _formatButton() {return new Button('formatButton', iFramePageLocators.formatButton);}
    get _fontSizesButton() {return new Button('fontSizesButton', iFramePageLocators.fontSizesButton);}
    get _biggerFontSizeButton() {return new Button('biggerFontSizeButton', iFramePageLocators.biggerFontSizeButton);}
    
    async _getframeTextField() {
        Logger.infoLog('Getting Frame text field');
        return new TextArea('frameTextField', iFramePageLocators.frameTextField);
    }

    async iFramePageIsDisplayed() {
        Logger.infoLog('Checking displaying of iFrame page');
        return this.isDisplayed();
    }

    async getFrameText() {
        Logger.infoLog('Getting Frame text');
        return (await this._getframeTextField()).getText();   
    }

    async moreButtonClick() {
        Logger.infoLog('Clicking on moreButton');
        return this._moreButton.click();
    }

    async alignLeftButtonClick() {
        Logger.infoLog('Clicking on alignLeftButton');
        return this._alignLeftButton.click();
    }

    async formatButtonClick() {
        Logger.infoLog('Clicking on formatButton');
        return this._formatButton.click();
    }

    async fontSizesButtonClick() {
        Logger.infoLog('Clicking on fontSizesButton');
        return this._fontSizesButton.click();
    }

    async biggerFontSizeButtonClick() {
        Logger.infoLog('Clicking on biggerFontSizeButton');
        return this._biggerFontSizeButton.click();
    }

    async changeFontSize () {
        Logger.infoLog('Changing Font Size of text');
        return [
            await this.formatButtonClick(),
            await this.fontSizesButtonClick(),
            await this.biggerFontSizeButtonClick()
        ];
    }

    async switchToFrame() {
        Logger.infoLog(`Switching to frame ${iFramePageLocators.framePath}`);
        return Browser.switchToFrame(iFramePageLocators.framePath);
    }

    async getFrameStyleAttribute() {
        Logger.infoLog(`Getting text style attribute from Frame`);
        return (await this._getframeTextField()).getAttribute('style');
    }

    async highlightText() {
        Logger.infoLog('Text highlighting');
        let textLength = (await this.getFrameText()).length
        const actions = Browser.driver.actions({async: true});
        let keysIterator = function () {
            for (let i = 0; i <= textLength/2; i++) {
                actions.sendKeys(Key.ARROW_RIGHT);
            };
            return
        }
        return [
            actions.keyDown(Key.SHIFT),
            keysIterator(),
            actions.perform()
        ]
    }

    async waitingFrameTextField() {
        Logger.infoLog(`Waiting for frame text field`);
        return Browser.wait(until.elementLocated(iFramePageLocators.frameTextField), testData.timeoutValue);
    }

    async waitingStyleAttribute() {
        Logger.infoLog(`Waiting for style attribute of the frame text field`);
        return Browser.wait(until.elementLocated(iFramePageLocators.frameTextFieldWithStyle), testData.timeoutValue);
    }

}

module.exports = IFramePage;