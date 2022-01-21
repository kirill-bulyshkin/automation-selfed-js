const {By} = require('selenium-webdriver');

const projectsPageLocators = {
    'projectsPageTitle': By.xpath("//div[contains(@class,'panel-heading') and (contains(text(), 'Available projects'))]"),
    'projectsPageFooter': By.xpath("//p[contains(@class,'footer-text')]/span")
};

module.exports = {projectsPageLocators};