const BasePage = require("../../framework/basePage/basePage");
const {By} = require('selenium-webdriver');
const BaseElement = require("../../framework/baseElement/baseElement");
const {locators} = require("../../testData/test.data");

class EmailPage extends BasePage {
    constructor() {
        super();
        this.browser = browser;
    }

    get helpFormClassAttribute() {
        return this.browser.driver.findElement(By.xpath(locators.helpFormClassAttribute)).getAttribute('class');
    }
    
    async hideHelpButtonClick() {
        return this.browser.driver.findElement(By.xpath(locators.hideHelpButtonClick)).click(); 
    } 
    
    async acceptCookiesButtonClick() {
        return this.browser.driver.findElement(By.xpath(locators.acceptCookiesButtonClick)).click();
    }
    
    get timerValue() {
        return this.browser.driver.findElement(By.xpath(locators.timerValue)).getText();
    }
    
    get loginForm() {
        return this.browser.driver.findElement(By.xpath(locators.loginForm));
    }
    
    get passwordField() {
        return this.browser.driver.findElement(By.xpath(locators.passwordField));
    }
    
    get emailField() {
        return this.browser.driver.findElement(By.xpath(locators.emailField));
    }
    
    get domainField() {
        return this.browser.driver.findElement(By.xpath(locators.domainField));
    }
    
    async domainDropdownClick() {
        return this.browser.driver.findElement(By.xpath(locators.domainDropdownClick)).click();
    }
    
    async dropdownItemClick() {
        return this.browser.driver.findElement(By.xpath(locators.dropdownItemClick)).click();
    }

    async checkboxClick() {
        return this.browser.driver.findElement(By.xpath(locators.checkboxClick)).click();
    }

    async nextButtonClick() {
        return this.browser.driver.findElement(By.xpath(locators.nextButtonClick)).click();
    }

}

module.exports = EmailPage;