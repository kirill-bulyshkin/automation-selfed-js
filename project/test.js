const {testData} = require('../testData/test.data');
const MysqlUtils = require('../project/mysqlUtils');
const dbUtils = require('../framework/utils/dbUtils');
const configsBD = require('../project/configs/configsBD.json');

it('Checking database', async () => {
    await dbUtils.getConnection(configsBD.host, configsBD.user, configsBD.database);
    await MysqlUtils.minTestsTime(testData.unit);
    await MysqlUtils.amountOfUniqueTests(testData.countOf);
    await MysqlUtils.testsFromDate(testData.dateFrom);
    await MysqlUtils.testsPerBrowsers(testData.browserOne, testData.browserTwo);
});