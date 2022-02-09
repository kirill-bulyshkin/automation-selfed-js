const setup = require('../../src/framework/browserActions');
const {ENVIRONMENT} = require('../../src/environmnet/envConfing');
const env = require(`../../src/environmnet/${ENVIRONMENT}Environment`);

beforeEach(async() => {
    await setup();
    await browser.url(env.startURL);
});

afterEach(async() => {
    return browser.reloadSession();
});