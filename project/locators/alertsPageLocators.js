const {By} = require('selenium-webdriver');

const alertsPageLocators = {
    'alertsTitle': By.xpath("//div[@class='example']/h3[text()[contains(., 'JavaScript Alerts')]]"),
    'alertButton': By.xpath("//div[@class='example']/ul/li/button[@onclick='jsAlert()']"),
    'confirmButton': By.xpath("//div[@class='example']/ul/li/button[@onclick='jsConfirm()']"),
    'promptButton': By.xpath("//div[@class='example']/ul/li/button[@onclick='jsPrompt()']"),
    'resultSection': By.xpath("//p[@id='result']"),

    // 'myPageButton': By.xpath("//span[contains(@class,'left_label') and contains(@class,'inl_bl')]")
};

module.exports = {alertsPageLocators};