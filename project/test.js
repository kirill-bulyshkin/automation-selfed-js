//Using lodash library to generate the random stings
const lodash = require('lodash');
const iterationsNumber = 20;
const upperBound = 35;
const base = 36;
const boldText = '700';


const {expect} = require('chai');
const {link} = require('../utils/test.data');
const Browser = require('./browser');
const FramePage = require('./iframe.page');


//Selenium connection
const {By, Key} = require('selenium-webdriver');

let driver;
let page;

beforeEach(async () => {
   browser = new Browser();
   await browser.init('chrome');
   await browser.navigate(link);
})

it('First Test', async () => {
    //Assert that text on the page is valid
    const titleText = 'An iFrame containing the TinyMCE WYSIWYG Editor';

    page = new FramePage(browser);

    const title = await page.title;
    expect(await title.getText()).to.be.equal(titleText);

    // Switch to iframe element
    await browser.goToFrame;
    
    //Enter new random text
    const randomString = lodash.times(iterationsNumber, () => lodash.random(upperBound).toString(base)).join('');
    const randomText = `You can see random text here now ${randomString} !!!`;

    const editableField = await page.editableField;
    await editableField.sendKeys(Key.CONTROL + "a");
    await editableField.sendKeys(randomText);
    
    //Assert that inputted text is displayed and valid
    expect(await editableField.getText()).to.be.equal(randomText);
    expect(await editableField.isDisplayed()).to.be.equal(true); 
    
    //Highlight the entered random text
    await editableField.sendKeys(Key.CONTROL + "a");

    //Back to main frame
    await browser.backFromFrame;

    //Press the 'B' button
    const boldTextButton = await page.boldTextButton;
    await boldTextButton.click();

    //Assert that inputted text is bold
    await browser.goToFrame;
    const fontWeight = page.fontWeight;
    expect(await fontWeight).to.be.equal(boldText);
})

afterEach(async () => {
    driver = browser.driver;
    await driver.quit();
})