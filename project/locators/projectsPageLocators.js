const {By} = require('selenium-webdriver');

const projectsPageLocators = {
    'projectsPageTitle': By.xpath("//div[contains(@class,'panel-heading') and (contains(text(), 'Available projects'))]"),
    'projectsPageFooter': By.xpath("//p[contains(@class,'footer-text')]/span"),
    'nexageProjectLink': By.xpath("//div[contains(@class,'list-group')]/a[contains(text(), 'Nexage')]")
};

module.exports = {projectsPageLocators};