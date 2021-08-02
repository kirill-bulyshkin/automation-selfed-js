const BasePage = require("../../framework/basePage/basePage");
const {By} = require('selenium-webdriver');
const {locators} = require("../../testData/test.data");
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

    get helpFormClassAttribute() {return this.browser.driver.findElement(By.xpath(locators.helpFormClassAttribute)).getAttribute('class');}
    get timerValue() {return this.browser.driver.findElement(By.xpath(locators.timerValue)).getText();}
    get loginForm() {return this.browser.driver.findElement(By.xpath(locators.loginForm));}
    get passwordField() {return new TextArea('passwordField', locators.passwordField);}
    get emailField() {return new TextArea('emailField', locators.emailField);}
    get domainField() {return new TextArea('domainField', locators.domainField);}
    get dropdown() {return new Dropdown('dropdown', locators.domainDropdown);}
    get dropdownItem() {return new Label('dropdownItem', locators.dropdownItem);}
    get checkbox() {return new Checkbox('checkbox', locators.checkbox);}
    get nextButton() {return new Button('nextButton', locators.nextButton);}


    async clearPasswordValue() {
        return this.passwordField.clearValue();
    }

    async setPasswordValue(value) {
        return this.passwordField.setValue(value);
    }

    async clearEmailValue() {
        return this.emailField.clearValue();
    }

    async setEmailValue(value) {
        return this.emailField.setValue(value);
    }

    async clearDomainValue() {
        return this.domainField.clearValue();
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
        return this.browser.driver.findElement(By.xpath(locators.hideHelpButtonClick)).click(); 
    } 
    
    async acceptCookiesButtonClick() {
        return this.browser.driver.findElement(By.xpath(locators.acceptCookiesButtonClick)).click();
    }

}

module.exports = EmailPage;