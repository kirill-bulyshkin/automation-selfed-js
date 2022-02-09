const Logger = require('../utils/logger');

module.exports = class Element {

    constructor(locator, name) {
        this.locator = locator;
        this.name = name;
    }

    async isDisplayed() {
        Logger.info(`Check that element "${this.name}" is diplayed`);
        const el = (await $(this.locator));
        return el.isDisplayed();
    }

    async waitForExist() {
        Logger.info(`Wait for element "${this.name}" is exist`);
        return (await $(this.locator)).waitForExist();
    }

    async click() {
        await this.waitForExist();
        Logger.info(`Click at "${this.name}"`);
        return (await $(this.locator)).click();
    }

    async type(text) {
        await this.waitForExist();
        Logger.info(`Type text "${text}" into element "${this.name}"`);
        return (await $(this.locator)).setValue(text);
    }

    async getText() {
        await this.waitForExist();
        Logger.info(`Get text from "${this.name}"`);
        return (await $(this.locator)).getText();
    }
};