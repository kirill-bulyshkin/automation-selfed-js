const BasePage = require("../../framework/basePage/basePage");
const {locators} = require("../locators/locators");
const TextArea = require("../../framework/baseElement/textArea");
const Label = require("../../framework/baseElement/label");
const Dropdown = require("../../framework/baseElement/dropdown");
const Checkbox = require("../../framework/baseElement/checkbox");
const Button = require("../../framework/baseElement/button");

class EmailPage extends BasePage {
    constructor() {
        super(locators.loginForm);
        this.uniqueLocator = locators.loginForm;
    }

    get passwordField() {return new TextArea('passwordField', locators.passwordField);}
    get emailField() {return new TextArea('emailField', locators.emailField);}
    get domainField() {return new TextArea('domainField', locators.domainField);}
    get dropdown() {return new Dropdown('dropdown', locators.domainDropdown);}
    get dropdownItem() {return new Label('dropdownItem', locators.dropdownItem);}
    get checkbox() {return new Checkbox('checkbox', locators.checkbox);}
    get nextButton() {return new Button('nextButton', locators.nextButton);}
    get hideHelpButton() {return new Button('hideHelpButton', locators.hideHelpButton);}
    get cookiesObjects() {return this.findElements(locators.cookiesObject);}
    get acceptCookiesButton() {return new Button('acceptCookiesButton', locators.acceptCookiesButton);}
    get helpForm() {return new Label('helpForm', locators.helpForm);}
    get timerArea() {return new Label('timerArea', locators.timerArea);}


    async clearPasswordValue() {
        return this.passwordField.clearValue();
    }

    async clearEmailValue() {
        return this.emailField.clearValue();
    }

    async clearDomainValue() {
        return this.domainField.clearValue();
    }


    async setPasswordValue(value) {
        return this.passwordField.setValue(value);
    }

    async setEmailValue(value) {
        return this.emailField.setValue(value);
    }

    async setDomainValue(value) {
        return this.domainField.setValue(value);
    }


    async domainDropdownClick() {
        return this.dropdown.click();
    }
    
    async dropdownItemClick() {
        return this.dropdownItem.click();
    }

    async checkboxClick() {
        return this.checkbox.click();
    }

    async nextButtonClick() {
        return this.nextButton.click();
    }

    async hideHelpButtonClick() {
        return this.hideHelpButton.click(); 
    } 
    
    async acceptCookiesButtonClick() {
        return this.acceptCookiesButton.click();
    }

    async gethelpFormClassAttribute() {
        return this.helpForm.getAttribute('class');
    }
    
    async getTimerValue() {
        return this.timerArea.getText();
    }

    async getCookiesObjectsLength() {
        return (await this.cookiesObjects).length;
    }

}

module.exports = EmailPage;