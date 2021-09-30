const {By} = require('selenium-webdriver');

const navigationBarPageLocators = {
    'myPageButton': By.xpath("//span[@class='left_label inl_bl']")
};

module.exports = {navigationBarPageLocators};