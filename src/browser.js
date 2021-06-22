//Selenium connection
const {Builder} = require('selenium-webdriver');

class Browser {
    driver

    async init(name) {
        this.driver = await new Builder().forBrowser(name).build();
    }

    async navigate(url) {
        await this.driver.get(url)
    }

    // async switchToFrameById(id) {
    //     await this.driver.switchTo().frame(this.driver.findElement(By.id(id)));
    // }
}

module.exports = Browser;