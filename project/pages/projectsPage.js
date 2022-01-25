const BasePage = require('../../framework/basePage/basePage');
const Logger = require('../../framework/utils/logger');
const {projectsPageLocators} = require('../locators/projectsPageLocators');
const Label = require('../../framework/baseElement/label');
const Link = require('../../framework/baseElement/link');
const Button = require('../../framework/baseElement/button');

class ProjectsPage extends BasePage {
    constructor() {
        super(projectsPageLocators.projectsPageTitle);
        this.uniqueLocator = projectsPageLocators.projectsPageTitle;
    }
    
    async projectsPageIsDisplayed() {
        Logger.infoLog('Checking displaying of Projects page');
        return this.isDisplayed();
    }

    get addProjectButton() {return new Button('addProjectButton', projectsPageLocators.addProjectButton);}

    async _getFooterVersionField() {
        Logger.infoLog('Getting footer version field');
        return new Label('footerVersionField', projectsPageLocators.projectsPageFooter);
    }

    async _getProjectByName(projectName) {
        Logger.infoLog('Getting project by name');
        return new Link('projectByName', projectsPageLocators.project(projectName));
    }

    async projectByNameIsDisplaying(projectName) {
        Logger.infoLog('Checking displaying of the project by name');
        return (await this._getProjectByName(projectName)).isElementDisplayed();
    }

    async getFooterVersionText() {
        Logger.infoLog('Getting footer version text');
        return (await this._getFooterVersionField()).getText();   
    }

    async clickProjectLink(projectName) {
        Logger.infoLog('Click on Nexage project link');
        return (await this._getProjectByName(projectName)).click();
    }

    async clickAddProjectButton() {
        Logger.infoLog('Click on Add Project button');
        return this.addProjectButton.click();
    }

}

module.exports = ProjectsPage;