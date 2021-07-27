const BasePage = require("../../framework/basePage/basePage");
const {By} = require('selenium-webdriver');

class WelcomePage extends BasePage {
    constructor() {
        super();
        this.browser = browser;
    }

    get welcomePageText() {
        return this.browser.driver.findElement(By.xpath("//p[@class='start__paragraph']")).getText();
    }

    async secondPageLinkClick() {
        return this.browser.driver.findElement(By.xpath("//a[@class='start__link']")).click();
    }

}

module.exports = WelcomePage;