const BasePage = require("../../framework/basePage/basePage");
const {By} = require('selenium-webdriver');
const {locators} = require("../../testData/test.data");

class InterestsPage extends BasePage {
    constructor() {
        super();
        this.browser = browser;
    }

    get secondLoginPageText() {
        return this.browser.driver.findElement(By.xpath(locators.secondLoginPageText)).getText();
    }

    async unselectAllCheckboxClick() {
        return this.browser.driver.findElement(By.xpath(locators.unselectAllCheckboxClick)).click();
    }

    async secondNextButtonClick() {
        return this.browser.driver.findElement(By.xpath(locators.secondNextButtonClick)).click();
    }

    get expectedErrorText() {
        return this.browser.driver.findElement(By.xpath(locators.expectedErrorText)).getText();
    }

}

module.exports = InterestsPage;