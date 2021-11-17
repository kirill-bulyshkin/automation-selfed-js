const {By} = require('selenium-webdriver');

const sliderPageLocators = {
    'sliderTitle': By.xpath("//div[@class='example']/h3[text()[contains(., 'Horizontal Slider')]]"),
    'slider': By.xpath("//div[@class='sliderContainer']/input[@type='range']"),
    'sliderValue': By.xpath("//div[@class='sliderContainer']/span[@id='range']")
};

module.exports = {sliderPageLocators};