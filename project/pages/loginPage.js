const BasePage = require('../../framework/basePage/basePage');
const {loginPageLocators} = require('../locators/loginPageLocators');
const TextArea = require('../../framework/baseElement/textArea');
const Logger = require('../../framework/utils/logger');

class LoginPage extends BasePage {

    async successfullAuthTextField() {
        Logger.infoLog('Getting successfullAuthTextField');
        return new TextArea('successfullAuthTextField', loginPageLocators.successfullAuthTextField);
    }

    async getSuccessfullAuthText() {
        Logger.infoLog(`Getting text of successfull authorization`);
        return (await this.successfullAuthTextField()).getText();
    }

}

module.exports = LoginPage;