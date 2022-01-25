const BasePage = require('../../framework/basePage/basePage');
const Logger = require('../../framework/utils/logger');
const {addProjectPageLocators} = require('../locators/addProjectPageLocators');
const TextArea = require('../../framework/baseElement/textArea');
const Button = require('../../framework/baseElement/button');
const Label = require('../../framework/baseElement/label');


class AddProjectPage extends BasePage {

    get addProjectNameField() {return new TextArea('addProjectNameField', addProjectPageLocators.addProjectNameField);}
    get saveProjectButton() {return new Button('saveProjectButton', addProjectPageLocators.saveProjectButton);}

    async _getSuccessProjectSavingField() {
        Logger.infoLog(`Getting success project saving field`);
        return new Label('successProjectSavingField', addProjectPageLocators.successProjectSavingField);
    }

    async setProjectNameValue(projectName) {
        Logger.infoLog(`Set value to project name field '${projectName}'`);
        return this.addProjectNameField.setValue(projectName);
    }

    async saveProjectButtonClick() {
        Logger.infoLog(`Clicking on Save Project button`);
        return this.saveProjectButton.click();
    }

    async _getSuccessProjectSavingText() {
        Logger.infoLog('Getting success project saving text')
        return (await this._getSuccessProjectSavingField()).getText();
    }
    
}

module.exports = AddProjectPage;