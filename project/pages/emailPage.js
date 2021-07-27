const BasePage = require("../../framework/basePage/basePage");
const {By} = require('selenium-webdriver');
const BaseElement = require("../../framework/baseElement/baseElement");

class EmailPage extends BasePage {
    constructor() {
        super();
        this.browser = browser;
    }

    get helpFormClassAttribute() {
        return this.browser.driver.findElement(By.xpath("//*[@id='app']/div/div[2]")).getAttribute('class');
    }
    
    async hideHelpButtonClick() {
        return this.browser.driver.findElement(By.xpath("//button[@class='button button--solid button--blue help-form__send-to-bottom-button']")).click(); 
    } 
    
    async acceptCookiesButtonClick() {
        return this.browser.driver.findElement(By.xpath("//button[@class='button button--solid button--transparent']")).click();
    }
    
    get timerValue() {
        return this.browser.driver.findElement(By.xpath("//*[@id='app']/div/div/div[2]/div")).getText();
    }
    
    get loginForm() {
        return this.browser.driver.findElement(By.xpath("//*[@id='app']/div/div/div[4]/div/div/div"));
    }
    
    get passwordField() {
        return this.browser.driver.findElement(By.xpath("//*[@id='app']/div/div/div[4]/div/div/div/div/form/div[1]/div[2]/input"));
    }
    
    get emailField() {
        return this.browser.driver.findElement(By.xpath("//*[@id='app']/div/div/div[4]/div/div/div/div/form/div[1]/div[3]/div[1]/input"));
    }
    
    get domainField() {
        return this.browser.driver.findElement(By.xpath("//*[@id='app']/div/div/div[4]/div/div/div/div/form/div[1]/div[3]/div[3]/input"));
    }
    
    async domainDropdownClick() {
        return this.browser.driver.findElement(By.xpath("//*[@id='app']/div/div/div[4]/div/div/div/div/form/div[1]/div[3]/div[4]/div")).click();
    }
    
    async dropdownItemClick() {
        return this.browser.driver.findElement(By.xpath("//*[@id='app']/div/div/div[4]/div/div/div/div/form/div[1]/div[3]/div[4]/div/div[2]/div[2]")).click();
    }

    async checkboxClick() {
        return this.browser.driver.findElement(By.xpath("//*[@class='icon icon-check checkbox__check']")).click();
    }

    async nextButtonClick() {
        return this.browser.driver.findElement(By.xpath("//*[@class='button--secondary']")).click();
    }

}

module.exports = EmailPage;