const {By} = require('selenium-webdriver');

const nexageProjectPageLocators = {
    'testsNames': By.xpath("//a[contains (@href, 'testInfo?testId')]"),
    'testsStartTimes': By.xpath("//td[4]")
};

module.exports = {nexageProjectPageLocators};