const {expect} = require('chai');
const {testData} = require('../testData/test.data');
const Browser = require('../framework/browser/browser');
const BasePage = require('../basePage/basePage')
const {By, Key} = require('selenium-webdriver');


beforeEach(async () => {
   browser = new Browser('chrome');
   await browser.init();
});

it('First Test Case', async () => {
    await browser.navigate(testData.link);

    let page = new BasePage(browser);

    expect(await page.welcomePageText).to.include(testData.welcomeText);

    const secondPageLink = await page.secondPageLink;
    await secondPageLink.click();
    
    expect (await page.loginForm.isDisplayed()).to.be.equal(true);

    function randomStr(length) {
        let result           = '';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }
     
    randomString = randomStr(10);
    
    const passwordField = await page.passwordField;
    await passwordField.sendKeys(Key.CONTROL + "a");
    await passwordField.sendKeys(randomString);
    
    const emailField = await page.emailField;
    await emailField.sendKeys(Key.CONTROL + "a");
    await emailField.sendKeys(randomString);

    const domainField = await page.domainField;
    await domainField.sendKeys(Key.CONTROL + "a");
    await domainField.sendKeys(randomString);

    await page.domainDropdown.click();
    await page.dropdownItem.click();
    await page.checkbox.click();
    await page.nextButton.click();

    expect (await page.secondLoginPageText).to.be.equal(testData.secondLoginPageValue);

     //Choose 3 random interests
    
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

