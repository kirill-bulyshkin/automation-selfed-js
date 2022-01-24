const BasePage = require('../../framework/basePage/basePage');
const Browser = require('../../framework/browser/browser');
const Logger = require('../../framework/utils/logger');
const {projectsPageLocators} = require('../locators/projectsPageLocators');
const Label = require('../../framework/baseElement/label');

class ProjectsPage extends BasePage {
    constructor() {
        super(projectsPageLocators.projectsPageTitle);
        this.uniqueLocator = projectsPageLocators.projectsPageTitle;
    }
    
    async projectsPageIsDisplayed() {
        Logger.infoLog('Checking displaying of Projects page');
        return this.isDisplayed();
    }

    async _getFooterVersionField() {
        Logger.infoLog('Getting footer version field');
        return new Label('footerVersionField', projectsPageLocators.projectsPageFooter);
    }

    async getFooterVersionText() {
        Logger.infoLog('Getting footer version text');
        return (await this._getFooterVersionField()).getText();   
    }

    async _getNexageProjectLink() {
        Logger.infoLog('Getting Nexage project link');
        return new Label('nexageProjectLink', projectsPageLocators.nexageProjectLink);
    }

    async clickNexageProjectLink() {
        Logger.infoLog('Click on Nexage project link');
        return (await this._getNexageProjectLink()).click();
    }

}

module.exports = ProjectsPage;