const {By} = require('selenium-webdriver');

class BasePage {
    constructor(browser) {
        this.browser = browser;
    }

    get welcomePageText() {
        return this.browser.driver.findElement(By.xpath("//p[@class='start__paragraph']")).getText();
    }

    get secondPageLink() {
        return this.browser.driver.findElement(By.xpath("//a[@class='start__link']"));
    }

    get helpFormClassAttribute() {
        return this.browser.driver.findElement(By.xpath("//*[@id='app']/div/div[2]")).getAttribute('class');
    }

    get hideHelpButton() {
        return this.browser.driver.findElement(By.xpath("//button[@class='button button--solid button--blue help-form__send-to-bottom-button']")); 
    } 

    get cookiesObject() {
        return this.browser.driver.findElements((By.xpath("//div[@class='cookies']")));
    }

    get acceptCookiesButton() {
        return this.browser.driver.findElement(By.xpath("//button[@class='button button--solid button--transparent']"));
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

    get domainDropdown() {
        return this.browser.driver.findElement(By.xpath("//*[@id='app']/div/div/div[4]/div/div/div/div/form/div[1]/div[3]/div[4]/div"));
    }

    get dropdownItem() {
        return this.browser.driver.findElement(By.xpath("//*[@id='app']/div/div/div[4]/div/div/div/div/form/div[1]/div[3]/div[4]/div/div[2]/div[2]"));
    }

    get checkbox() {
        return this.browser.driver.findElement(By.xpath("//*[@class='icon icon-check checkbox__check']"));
    }

    get nextButton() {
        return this.browser.driver.findElement(By.xpath("//*[@class='button--secondary']"));
    }

    get secondLoginPageText() {
        return this.browser.driver.findElement(By.xpath("//*[@class='page-indicator']")).getText();
    }

}

module.exports = BasePage;