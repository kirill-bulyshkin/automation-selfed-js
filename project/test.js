const {expect} = require('chai');
const {testData, path, hoversTestUserNumbers, sliderValues, sliderMap} = require('../testData/test.data');
const RandomGenerators = require('../framework/utils/randomGenerator');
const Browser = require('../framework/browser/browser');
const LoginPage = require('./pages/loginPage');
const AlertsPage = require('./pages/alertsPage');
const SliderPage = require('./pages/sliderPage');
const IFramePage = require('./pages/iFramePage');
const HoversPage = require('./pages/hoversPage');

it('Basic Authorization', async () => {
    await Browser.navigate(`${testData.hostForBasicAuth(testData.login, testData.password)}${path.basicAuth}`);
    await Browser.windowMaximize();
    const loginPage = new LoginPage();
    expect (await loginPage.getSuccessfullAuthText()).to.eql(testData.congratulationsText);
});

it('Alerts', async () => {
    await Browser.navigate(`${testData.host}${path.alerts}`);
    await Browser.windowMaximize();
    const alertsPage = new AlertsPage();
    expect (await alertsPage.isDisplayed()).to.eql(testData.pageIsDisplaying);
    await alertsPage.jsAlertButtonClick();
    expect (await alertsPage.getAlertText()).to.eql(testData.jsAlertTitle);
    await alertsPage.acceptAlert();
    expect (await alertsPage.alertIsPresent()).to.eql(testData.alertIsNotPresent);
    expect (await alertsPage.getResultText()).to.eql(testData.resultAlertText);
    await alertsPage.jsConfirmButtonClick();
    expect (await alertsPage.getAlertText()).to.eql(testData.jsConfirmTitle);
    await alertsPage.acceptAlert();
    expect (await alertsPage.alertIsPresent()).to.eql(testData.alertIsNotPresent);
    expect (await alertsPage.getResultText()).to.eql(testData.resultConfirmText);
    await alertsPage.jsPromptButtonClick();
    expect (await alertsPage.getAlertText()).to.eql(testData.jsPromptTitle);
    const randomText = RandomGenerators.randomStr(testData.randomStringLength);
    await alertsPage.sendKeysToAlert(randomText);
    await alertsPage.acceptAlert();
    expect (await alertsPage.getResultText()).to.eql(testData.resultPromptText(randomText));
});

it('Slider', async () => {
        await Browser.navigate(`${testData.host}${path.slider}`);
        await Browser.windowMaximize();
        const sliderPage = new SliderPage();
        expect (await sliderPage.isDisplayed()).to.eql(testData.pageIsDisplaying);
        const randomSliderPosition = RandomGenerators.getRandomValueFromArray(sliderValues);
        await sliderPage.dragAndDropSlider(randomSliderPosition);
        expect (await sliderPage.getSliderValue()).to.eql(sliderMap.get(randomSliderPosition));
});

hoversTestUserNumbers.forEach(function(userNumber) {

        it(`Hovers (Test User Number ${userNumber})`, async () => {
                await Browser.navigate(`${testData.host}${path.hovers}`);
                await Browser.windowMaximize();
                const hoversPage = new HoversPage();
                expect (await hoversPage.isDisplayed()).to.eql(testData.pageIsDisplaying);
                await hoversPage.moveCursorToHover(userNumber);
                expect (await hoversPage.getHoverText(userNumber)).to.eql(testData.hoverText(userNumber));
                expect (await hoversPage.hoverLinkIsDisplayed(userNumber)).to.eql(testData.elementIsDisplaying);
                const hoverLinkHref = await hoversPage.getHoverLinkHref(userNumber);
                await hoversPage.hoverLinkClick(userNumber);
                expect (await Browser.getCurrentUrl()).to.eql(hoverLinkHref);
                await Browser.backToPreviousPage();
        });

});

it('IFrame', async () => {
        await Browser.navigate(`${testData.host}${path.iframe}`);
        await Browser.windowMaximize();
        const iFramePage = new IFramePage();
        expect (await iFramePage.isDisplayed()).to.eql(testData.pageIsDisplaying);
        await iFramePage.switchToFrame();
        await iFramePage.waitingFrameTextField();
        await Browser.switchToDefault();
        await iFramePage.alignLeftButtonClick();
        await iFramePage.switchToFrame();
        expect (await iFramePage.getFrameStyleAttribute()).to.include(testData.testAlignLeft);
        await iFramePage.highlightText();
        await Browser.switchToDefault();
        await iFramePage.changeFontSize();
});