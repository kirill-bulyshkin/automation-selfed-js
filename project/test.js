const {expect} = require('chai');
const {testData, locators} = require('../testData/test.data');
const Browser = require('../framework/browser/browser');
const BasePage = require('../framework/basePage/basePage');
const WelcomePage = require('./pages/welcomePage');
const EmailPage = require('./pages/emailPage');
const InterestsPage = require('./pages/interestsPage');
const {Key} = require('selenium-webdriver');


beforeEach(async () => {
   browser = new Browser;
   await browser.init(testData.browserName);
});

it('User can sign up and choose interests', async () => {
    await browser.navigate(testData.link);
    await browser.windowMaximize();

    let welcomePage = new WelcomePage(browser);

    expect(await welcomePage.welcomePageText).to.include(testData.welcomeText);

    await welcomePage.secondPageLinkClick();

    let emailPage = new EmailPage(browser);
    
    expect (await emailPage.loginForm.isDisplayed()).to.be.equal(true);

    function randomStr(length) {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }
     
    randomString = randomStr(10);
    
    const passwordField = await emailPage.passwordField;
    await browser.clearField(passwordField);
    await browser.setValue(passwordField, randomString);
    
    const emailField = await emailPage.emailField;
    await browser.clearField(emailField);
    await browser.setValue(emailField, randomString);

    const domainField = await emailPage.domainField;
    await browser.clearField(domainField);
    await browser.setValue(domainField, randomString);

    await emailPage.domainDropdownClick();
    await emailPage.dropdownItemClick();
    await emailPage.checkboxClick();
    await emailPage.nextButtonClick();

    let interestsPage = new InterestsPage(browser);

    expect (await interestsPage.secondLoginPageText).to.be.equal(testData.secondLoginPageValue);

    await interestsPage.unselectAllCheckboxClick();

    let page = new BasePage(browser);

    const listOfCheckboxesLocator = locators.listOfCheckboxes;
    const listOfCheckboxes = await page.findElements(listOfCheckboxesLocator);
    const listOfCheckboxesLength = listOfCheckboxes.length;

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    do {
        randomCheckbox = getRandomIntInclusive(0, listOfCheckboxesLength - 1);
        await page.click(listOfCheckboxes[randomCheckbox]);
        await interestsPage.secondNextButtonClick();

        listOfErrorsLocator = locators.listOfErrors;
        listOfErrors = await page.findElements(listOfErrorsLocator);
        amountOfErrors = listOfErrors.length

    } while (amountOfErrors != 1);
    
    expect (await interestsPage.expectedErrorText).to.be.equal(testData.expectedErrorText)
});

it('Help form could be hidden', async () => {
    await browser.navigate(testData.link);

    let welcomePage = new WelcomePage(browser);

    expect(await welcomePage.welcomePageText).to.include(testData.welcomeText);

    await welcomePage.secondPageLinkClick();

    let emailPage = new EmailPage(browser);

    await emailPage.hideHelpButtonClick();

    const helpFormClassAttribute = await emailPage.helpFormClassAttribute;
    const hiddenHelpFormClass = 'help-form is-hidden';

    expect(helpFormClassAttribute).to.be.equal(hiddenHelpFormClass);

});

it('Accepting cookies', async () => {
    await browser.navigate(testData.link);

    let welcomePage = new WelcomePage(browser);

    expect(await welcomePage.welcomePageText).to.include(testData.welcomeText);

    await welcomePage.secondPageLinkClick();
 
    await browser.setTimeout(testData.timeoutValue);

    let emailPage = new EmailPage(browser);

    await emailPage.acceptCookiesButtonClick();

    let page = new BasePage(browser);

    const cookiesObjectLocator = locators.cookiesObject;
    const cookiesObject = await page.findElements(cookiesObjectLocator);

    expect(await cookiesObject.length).to.be.equal(0);
});


it('Timer starts counting from zero', async () => {
    await browser.navigate(testData.link);

    let welcomePage = new WelcomePage(browser);

    expect(await welcomePage.welcomePageText).to.include(testData.welcomeText);

    await welcomePage.secondPageLinkClick();

    let emailPage = new EmailPage(browser);
    
    expect(await emailPage.timerValue).to.be.equal(testData.timerStartValue);
});


afterEach(async () => {
    await browser.driver.quit();
});

