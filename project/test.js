const {testData} = require('../testData/test.data');
const MysqlUtils = require('../framework/utils/mysqlUtils');

it('Min time of tests run', async () => {
    await MysqlUtils.minTestsTime(testData.unit);
});

it('All projects with amount of the unique tests', async () => {
    await MysqlUtils.amountOfUniqueTests(testData.countOf);
});

it('All tests from specific date', async () => {
    await MysqlUtils.testsFromDate(testData.dateFrom);
});

it('Amount of the tests performed on Firefox and Chrome', async () => {
    await MysqlUtils.testsPerBrowsers(testData.browserOne, testData.browserTwo)
});