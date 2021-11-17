const {By} = require('selenium-webdriver');

const iFramePageLocators = {
    'iFrameTitle': By.xpath("//div[@class='example']/h3[text()[contains(., 'An iFrame containing the TinyMCE WYSIWYG Editor')]]"),
    'framePath' : By.xpath("//iframe[@id='mce_0_ifr']"),
    'moreButton': By.xpath("//button[contains(@title, 'More...')]"),
    'alignLeftButton': By.xpath("//button[contains(@title, 'Align left')]"),
    'frameTextField': By.xpath("//body[@class='mce-content-body ']/p"),
    'formatButton': By.xpath("//button[@role='menuitem']/span[text()[contains(., 'Format')]]"),
    'fontSizesButton': By.xpath("//div[@title='Font sizes']"),
    'biggerFontSizeButton': By.xpath("//div[@title='24pt']"),
    'frameTextFieldWithStyle': By.xpath("//p[@style='text-align: left;']")
};

module.exports = {iFramePageLocators};