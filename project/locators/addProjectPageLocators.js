const {By} = require('selenium-webdriver');

const addProjectPageLocators = {
  'addProjectNameField': By.xpath("//form/div/input[@id='projectName']"),
  'saveProjectButton': By.xpath("//button[contains(text(), 'Save')]"),
  'successProjectSavingField': By.xpath("//div[contains(@class, 'alert-success')]")
};

module.exports = {addProjectPageLocators};