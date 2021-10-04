const Browser = require('../framework/browser/browser');
const configs = require('../project/configs/configs.json');

beforeEach(async () => {
    await Browser.initBrowser(configs.browserName);
});

afterEach(async () => {
    await Browser.quit();
});