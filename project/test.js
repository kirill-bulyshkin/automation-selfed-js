const {expect} = require('chai');
const {testData} = require('../testData/test.data');
const Browser = require('../framework/browser/browser');
const BasePage = require('../basePage/basePage')
const {By, Key} = require('selenium-webdriver');


beforeEach(async () => {
   browser = new Browser('chrome');
   await browser.init();
});

it('Second Test Case', async () => {
    await browser.navigate(testData.link);

    let page = new BasePage(browser);

    expect(await page.welcomePageText).to.include(testData.welcomeText);

    const secondPageLink = await page.secondPageLink;
    await secondPageLink.click();

    const hideHelpButton = await page.hideHelpButton;
    await hideHelpButton.click();

    const helpFormClassAttribute = await page.helpFormClassAttribute;

    expect(helpFormClassAttribute).to.be.equal(testData.hiddenHelpForm);

});

it('Third Test Case', async () => {
    await browser.navigate(testData.link);

    let page = new BasePage(browser);

    expect(await page.welcomePageText).to.include(testData.welcomeText);

    const secondPageLink = await page.secondPageLink;
    await secondPageLink.click();

    const timeoutValue = 2000; 
    await browser.setTimeout(timeoutValue);

    const acceptCookiesButton = await page.acceptCookiesButton;
    await acceptCookiesButton.click();

    const cookiesObject = await page.cookiesObject;
    
    expect(await cookiesObject.length).to.be.equal(0);
});


it('Fourth Test Case', async () => {
    await browser.navigate(testData.link);

    let page = new BasePage(browser);

    expect(await page.welcomePageText).to.include(testData.welcomeText);

    const secondPageLink = await page.secondPageLink;
    await secondPageLink.click();
    
    expect(await page.timerValue).to.be.equal(testData.timerStartValue);
});


afterEach(async () => {
    await browser.driver.quit();
});

