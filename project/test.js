const {expect} = require('chai');
const {testData} = require('../testData/test.data');
const {locators} = require('../project/locators/locators');
const Browser = require('../framework/browser/browser');
const BasePage = require('../framework/basePage/basePage');
const WelcomePage = require('./pages/welcomePage');
const EmailPage = require('./pages/emailPage');
const InterestsPage = require('./pages/interestsPage');
const {randomStr} = require('../framework/utils/randomGenerator');


beforeEach(async () => {
   await Browser.init(testData.browserName);
});

it('User can sign up and choose interests', async () => {
    await Browser.navigate(testData.link);
    await Browser.windowMaximize();
    let welcomePage = new WelcomePage();
    expect(await welcomePage.isDisplayed()).to.be.true;
    await welcomePage.clickSecondPageLink();
    let emailPage = new EmailPage();
    expect (await emailPage.isDisplayed()).to.be.true;
    const randomString = randomStr(10);
    await emailPage.clearPasswordValue();
    await emailPage.setPasswordValue(randomString);
    await emailPage.clearEmailValue();
    await emailPage.setEmailValue(randomString);
    await emailPage.clearDomainValue();
    await emailPage.setDomainValue(randomString);
    await emailPage.domainDropdownClick();
    await emailPage.dropdownItemClick();
    await emailPage.checkboxClick();
    await emailPage.nextButtonClick();
    let interestsPage = new InterestsPage();
    expect (await interestsPage.isDisplayed()).to.be.true;
    await interestsPage.unselectAllCheckboxClick();
    await interestsPage.selectInterests(3);
    await interestsPage.secondNextButtonClick();
    expect (await interestsPage.getExpectedErrorText()).to.be.equal(testData.expectedErrorText);
});

it('Help form could be hidden', async () => {
    await Browser.navigate(testData.link);
    let welcomePage = new WelcomePage();
    expect(await welcomePage.isDisplayed()).to.be.true;
    await welcomePage.clickSecondPageLink();
    let emailPage = new EmailPage();
    await emailPage.hideHelpButtonClick();
    expect(await emailPage.gethelpFormClassAttribute()).to.be.equal(testData.hiddenHelpFormClass);
});

it('Accepting cookies', async () => {
    await Browser.navigate(testData.link);
    let welcomePage = new WelcomePage();
    expect(await welcomePage.isDisplayed()).to.be.true;
    await welcomePage.clickSecondPageLink();
    await Browser.setTimeout();
    let emailPage = new EmailPage();
    await emailPage.acceptCookiesButtonClick();
    const cookiesObject = await emailPage.findElements(locators.cookiesObject);
    expect(await cookiesObject.length).to.be.equal(0);
});


it('Timer starts counting from zero', async () => {
    await Browser.navigate(testData.link);
    let welcomePage = new WelcomePage();
    expect(await welcomePage.isDisplayed()).to.be.true;
    await welcomePage.clickSecondPageLink();
    await Browser.setTimeout();
    let emailPage = new EmailPage();
    expect(await emailPage.getTimerValue()).to.be.equal(testData.timerStartValue);
});


afterEach(async () => {
    await Browser.driver.quit();
});

