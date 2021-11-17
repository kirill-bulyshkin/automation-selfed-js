const {By} = require('selenium-webdriver');

const loginPageLocators = {
    'successfullAuthTextField': By.xpath("//div[@class='example']/p")
};

module.exports = {loginPageLocators};