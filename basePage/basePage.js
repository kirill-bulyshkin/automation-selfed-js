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
        return this.browser.driver.findElement(By.xpath("//button[@class='button button--solid button--blue help-form__send-to-bottom-button']")) 
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
}

module.exports = BasePage;