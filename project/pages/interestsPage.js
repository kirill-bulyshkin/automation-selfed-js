const BasePage = require("../../framework/basePage/basePage");
const {locators} = require("../locators/locators");
const Checkbox = require("../../framework/baseElement/checkbox");
const {getRandomIntInclusive} = require('../../framework/utils/randomGenerator');
const Label = require("../../framework/baseElement/label");
const Button = require("../../framework/baseElement/button");

class InterestsPage extends BasePage {
    constructor() {
        super(locators.secondLoginPageText);
        this.uniqueLocator = locators.secondLoginPageText;
    }

    get unselectAllCheckbox() {return new Checkbox('unselectAllCheckbox', locators.unselectAllCheckbox);}
    get expectedError() {return new Label('expectedError', locators.expectedError);}
    get secondNextButton() {return new Button('secondNextButton', locators.secondNextButton);}

    async unselectAllCheckboxClick() {
        return this.unselectAllCheckbox.click();
    }

    async secondNextButtonClick() {
        return this.secondNextButton.click();
    }

    async selectInterests(amount) {
        const interestsCheckboxes = await this.findElements(locators.interestsCheckbox);
        const interestsNames = await this.findElements(locators.interestsNames);
        for(let i=0; i < interestsNames.length; i++){
            if((await interestsNames[i].getText()) == 'Select all' || (await interestsNames[i].getText()) == 'Unselect all'){
                (await interestsCheckboxes).splice(i, 1);
                (await interestsNames).splice(i, 1);
                i--;
            }
        }
        for(let i=0; i<amount; i++){
            await interestsCheckboxes[getRandomIntInclusive(0, interestsCheckboxes.length)].click();
        }
    }

    async getExpectedErrorText() {
        return this.expectedError.getText();
    }
}

module.exports = InterestsPage;