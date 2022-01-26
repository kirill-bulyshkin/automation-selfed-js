const {By} = require('selenium-webdriver');

const newTestPageLocators = {
  addedLogs: (logs) => By.xpath(`//td[contains(text(), '${logs}')]`),
  addedAttach: (attach) => By.xpath(`//img[contains(@src, '${attach}')]`)
};

module.exports = {newTestPageLocators};