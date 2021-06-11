//Using lodash library to generate the random stings
const _ = require('lodash');
const randomText = _.times(20, () => _.random(35).toString(36)).join('');

//Selenium connection
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function firstTask() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Navigate to Url from the task
        await driver.get('http://the-internet.herokuapp.com/iframe');

        //Store editable field element
        let editableField = driver.findElement(By.id('mce_0_ifr'));

        //Deleting existing text + enter new random text
        await editableField.sendKeys(Key.CONTROL + "a");
        await editableField.sendKeys(Key.DELETE);
        await editableField.sendKeys(`You can see random text here now ${randomText} !!!`);
        
        //Highlight the entered random text and press the 'B' button
        await editableField.sendKeys(Key.CONTROL + "a");
        let boldTextButton = driver.findElement(By.xpath("//button[@title='Bold']"));

        await boldTextButton.click();
    }
    finally{
        driver.uff();
    }
})();

