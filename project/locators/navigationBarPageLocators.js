const {By} = require('selenium-webdriver');

const navigationBarPageLocators = {
    'myPageButton': By.xpath("//span[contains(@class,'left_label') and contains(@class,'inl_bl')]")
};

module.exports = {navigationBarPageLocators};