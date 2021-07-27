const BasePage = require("../../framework/basePage/basePage");
const {By} = require('selenium-webdriver');

class InterestsPage extends BasePage {
    constructor() {
        super();
        this.browser = browser;
    }

    get secondLoginPageText() {
        return this.browser.driver.findElement(By.xpath("//*[@class='page-indicator']")).getText();
    }

    async unselectAllCheckboxClick() {
        return this.browser.driver.findElement(By.xpath("//*[@for='interest_unselectall']/span")).click();
    }

    async secondNextButtonClick() {
        return this.browser.driver.findElement(By.xpath("//*[@class='button button--stroked button--white button--fluid']")).click();
    }

    get expectedErrorText() {
        return this.browser.driver.findElement(By.xpath("//*[@class='avatar-and-interests__error']")).getText();
    }

}

module.exports = InterestsPage;