//Using lodash library to generate the random stings
const lodash = require('lodash');
const iterationsNumber = 20;
const upperBound = 35;
const base = 36;
const randomString = lodash.times(iterationsNumber, () => lodash.random(upperBound).toString(base)).join('');
const randomText = `You can see random text here now ${randomString} !!!`;

const link = 'http://the-internet.herokuapp.com/iframe';
const titleText = 'An iFrame containing the TinyMCE WYSIWYG Editor';
const boldText = '700';

const {expect} = require('chai');
const Browser = require('./browser');
const FramePage = require('./iframe.page');

//Selenium connection
const {By, Key} = require('selenium-webdriver');

let driver
let page

beforeEach(async () => {
   const browser = new Browser()
   await browser.init('chrome')
   await browser.navigate(link)
   driver = browser.driver
   page = new FramePage(browser)
})

it('First Test', async () => {
    //Assert that text on the page is valid
    const title = await page.title;
    expect(await title.getText()).to.be.deep.equal(titleText);

    // Switch to iframe element
    await page.goToFrame;
    
    //Enter new random text
    const editableField = await page.editableField;
    await editableField.sendKeys(Key.CONTROL + "a");
    await editableField.sendKeys(randomText);
    
    //Assert that inputted text is displayed and valid
    expect(await editableField.getText()).to.be.deep.equal(randomText);
    expect(await editableField.isDisplayed()).to.be.deep.equal(true); 
    
    //Highlight the entered random text
    await editableField.sendKeys(Key.CONTROL + "a");

    //Back to main frame
    await page.backFromFrame;

    //Press the 'B' button
    const boldTextButton = await page.boldTextButton;
    await boldTextButton.click();

    //Assert that inputted text is bold
    await page.goToFrame;
    const fontWeight = await page.fontWeight;
    expect(await fontWeight).to.be.deep.equal(boldText);
})

afterEach(async () => {
    await driver.quit()
})