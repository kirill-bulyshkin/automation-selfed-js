const {By} = require('selenium-webdriver');

const loginPageLocators = {
    'successfullAuthTextField': By.xpath("//div[@class='example']/p")

    // 'loginField': By.xpath("//input[@id='index_email']"),
    // 'passwordField': By.xpath("//input[@id='index_pass']"),
    // 'loginButton': By.xpath("//button[@id='index_login_button']"),
};

module.exports = {loginPageLocators};