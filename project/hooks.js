const Browser = require('../framework/browser/browser');
const configs = require('../project/configs/configs');

if (configs.browserName == 'firefox') {
    beforeEach(async () => {
        await Browser.initFirefox(configs.browserName);
    });
};

if (configs.browserName == 'chrome') {
    beforeEach(async () => {
        await Browser.initChrome(configs.browserName);
    });
};

afterEach(async () => {
    await Browser.quit();
});