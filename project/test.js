const {expect} = require('chai');
const {testData, locators} = require('../testData/test.data');
const Browser = require('../framework/browser/browser');
const BasePage = require('../framework/basePage/basePage');
const WelcomePage = require('./pages/welcomePage');
const EmailPage = require('./pages/emailPage');
const InterestsPage = require('./pages/interestsPage');
const {Key} = require('selenium-webdriver');
const {randomStr} = require('../framework/utils/randomGenerator');


beforeEach(async () => {
   await Browser.init(testData.browserName);
});

it.only('User can sign up and choose interests', async () => {
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
    await Browser.driver.quit();
});

