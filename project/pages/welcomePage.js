const BasePage = require("../../framework/basePage/basePage");
const {locators} = require('../../testData/test.data');
const {By} = require('selenium-webdriver');

class WelcomePage extends BasePage {
    constructor() {
        super();
        this.browser = browser;
    }

    get welcomePageText() {
        return this.browser.driver.findElement(By.xpath(locators.welcomePageText)).getText();
    }

    async secondPageLinkClick() {
        return this.browser.driver.findElement(By.xpath(locators.secondPageLinkClick)).click();
    }

}

module.exports = WelcomePage;