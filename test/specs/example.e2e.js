require('./hooks');
const allureReporter = require('@wdio/allure-reporter').default
const Logger = require('../../src/framework/utils/logger');
const loginPage = require('../../src/pages/loginPage.po');
const securePage = require('../../src/pages/securePage.po');

describe('My Login application', () => {

    it('should login with valid credentials', async () => {
        allureReporter.addDescription('User logs into app with valid credentials');
        allureReporter.addTestId('001');
        expect(await loginPage.isFormOpened()).withContext('Login page is not opened').toBeTrue();
        await loginPage.typeLogin('tomsmith');
        await loginPage.typePassword('SuperSecretPassword!');
        await loginPage.clickLoginBtn();

        // await $('#username').setValue('tomsmith');
        // await $('#password').setValue('SuperSecretPassword!');
        // await $('button[type="submit"]').click();
        
        allureReporter.addStep('Assert that Secure page is opened');
        expect(await securePage.isFormOpened()).toBeTrue();
        expect(await securePage.getTextFromMessage()).toContain('You logged into a secure area!!');
        
        // await expect($('#flash')).toBeExisting();
        // await expect($('#flash')).toHaveTextContaining(
        //     'You logged into a secure area!');
    });
});