const Browser = require('../framework/browser/browser');
const configs = require('../project/configs/configs');

beforeEach(async () => {
    await Browser.init(configs.browserName);
});

afterEach(async () => {
    await Browser.quit();
});