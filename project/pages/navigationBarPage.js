const BasePage = require('../../framework/basePage/basePage');
const {locators} = require('../locators/locators');
const Button = require('../../framework/baseElement/button');
const Logger = require('../../framework/utils/logger');

class NavigationBarPage extends BasePage {

    get myPageButton() {return new Button('myPageButton', locators.myPageButton);}

    async myPageButtonClick() {
        Logger.infoLog('Click on My Page Button');
        return this.myPageButton.click()
    }
}

module.exports = NavigationBarPage;