const {By} = require('selenium-webdriver');

const newProjectPageLocators = {
    newTestName: (randomTestName) => By.xpath(`//a[contains(text(), '${randomTestName}')]`)
};

module.exports = {newProjectPageLocators};