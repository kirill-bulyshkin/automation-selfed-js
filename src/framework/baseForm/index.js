const Logger = require('../utils/logger');

module.exports = class BaseForm {

    constructor(element, name) {
        this.element = element;
        this.name = name;
    }

    async isFormOpened() {
        const isOpened = await this.element.isDisplayed();
        Logger.info(`Form "${this.name}" is opened - ${isOpened}`);
        return isOpened;
    }

    async waitForFormIsOpened() {
        await this.element.waitForExist();
        return this.isFormOpened();
    }
};