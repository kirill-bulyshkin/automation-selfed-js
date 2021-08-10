const BasePage = require("../../framework/basePage/basePage");
const {locators} = require("../locators/locators");
const Label = require("../../framework/baseElement/label");
const Link = require("../../framework/baseElement/link");

class WelcomePage extends BasePage {
    constructor() {
        super(locators.welcomeTextLabel);
        this.uniqueLocator = locators.welcomeTextLabel;
    }

    get welcomeTextLabel() {
        return new Label('welcomeTextLabel', locators.welcomeTextLabel);
    }

    get secondPageLink() {
        return new Link('secondPageLink', locators.secondPageLink);
    }

    async getWelcomeText() {
        return this.welcomeTextLabel.getText();
    }

    async clickSecondPageLink() {
        return this.secondPageLink.click();
    }
}

module.exports = WelcomePage;