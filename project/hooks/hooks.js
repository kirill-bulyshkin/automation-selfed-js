const Browser = require('../../framework/browser/browser');
const configs = require('../configs/configs');

class Hooks {

    async beforeEach() {
        beforeEach(async () => {
            await Browser.init(configs.browserName);
        });
    }

    async afterEach() {
        afterEach(async () => {
            await Browser.quit();
        });
    }

};

module.exports = Hooks;