//Using lodash library to generate the random stings
const lodash = require('lodash');
const iterationsNumber = 20;
const upperBound = 35;
const base = 36;
const randomString= lodash.times(iterationsNumber, () => lodash.random(upperBound).toString(base)).join('');
const randomText = `You can see random text here now ${randomString} !!!`;
const {expect} = require('chai');

//Selenium connection
const {Builder, By, Key} = require('selenium-webdriver');

let driver
let page

beforeEach(async () => {
   const browser = new Browser()
   await browser.init('chrome')
   await browser.navigate('http://the-internet.herokuapp.com/iframe')
   driver = browser.driver
   page = new FramePage(browser)
})

it('First Test', async () => {
    //Assert that text on the page is valid
    const title = await page.title;
    expect(await title.getText()).to.be.deep.equal('An iFrame containing the TinyMCE WYSIWYG Editor');

    // Switch to iframe element
    await driver.switchTo().frame(driver.findElement(By.id('mce_0_ifr')));

    // with class
    // await driver.switchToFrameById('mce_0_ifr');
    
    //Deleting existing text + enter new random text
    const editableField = await page.editableField;
    await editableField.sendKeys(Key.CONTROL + "a");
    await editableField.sendKeys(Key.BACK_SPACE);
    await editableField.sendKeys(randomText);

    //Assert that inputted text is displayed and valid
    expect(await editableField.getText()).to.be.deep.equal(randomText);
    expect(await editableField.isDisplayed()).to.be.deep.equal(true); 
    
    //Highlight the entered random text
    await editableField.sendKeys(Key.CONTROL + "a");

    //Back to main frame
    await driver.switchTo().defaultContent();

    //Press the 'B' button
    const boldTextButton = await driver.findElement(By.xpath("//button[@title='Bold']"));
    await boldTextButton.click();

    //Assert that inputted text is bold
    await driver.switchTo().frame(driver.findElement(By.id('mce_0_ifr')));
    const boldFontWeight = await driver.findElement(By.css('strong')).getCssValue('font-weight');
    expect(await boldFontWeight).to.be.deep.equal('700');
})

afterEach(async () => {
    await driver.quit()
})

class FramePage {
    constructor(browser) {
        this.browser = browser
    }

    get title() {
        return this.browser.driver.findElement(By.css('h3'))
    }

    get editableField() {
       return this.browser.driver.findElement(By.css('p'))
    }
}

class Browser {
    driver

    async init(name) {
        this.driver = await new Builder().forBrowser(name).build();
    }

    async navigate(url) {
        await this.driver.get(url)
    }

    // async switchToFrameById(id) {
    //     await this.driver.switchTo().frame(this.driver.findElement(By.id(id)));
    // }
}
