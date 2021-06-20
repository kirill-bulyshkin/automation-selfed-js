//Using lodash library to generate the random stings
const lodash = require('lodash');
const iterationsNumber = 20;
const upperBound = 35;
const base = 36;
const randomText = lodash.times(iterationsNumber, () => lodash.random(upperBound).toString(base)).join('');

// const num = 11;
// console.log(num.toString(36))

//Selenium connection
const {Builder, By, Key} = require('selenium-webdriver');

(async function firstTask() {
    let driver = await new Builder().forBrowser('chrome').build();

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

        driver.temp();
        return (console.log('Task completed successfully!'));
})
();

