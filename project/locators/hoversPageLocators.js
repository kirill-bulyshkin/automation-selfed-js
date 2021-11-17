const {By} = require('selenium-webdriver');

const hoversPageLocators = {
    'hoversTitle': By.xpath("//div[@class='example']/h3[text()[contains(., 'Hovers')]]"),
    hover: (userNumber) => By.xpath(`//div[${userNumber}][@class='figure']`),
    hoverTextField: (userNumber) => By.xpath(`//div[@class='figcaption']/h5[text()[contains(., 'user${userNumber}')]]`),
    hoverLink: (userNumber) => By.xpath(`//div[@class='figcaption']/a[contains(@href, '/users/${userNumber}')]`)
};

module.exports = {hoversPageLocators};