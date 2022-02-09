const Logger = require('../utils/logger');

module.exports = async function() {

    await browser.overwriteCommand('url', async(originFunc, url) => {
        Logger.info(`Open url "${url}"`);
        return originFunc(url);
    });

    await browser.overwriteCommand('reloadSession', async(originFunc) => {
        Logger.info(`Reload session`);
        return originFunc();
    });

};