const {testData} = require('../testData/test.data');
const MysqlUtils = require('../framework/utils/mysqlUtils');

beforeEach(async () => {
    await MysqlUtils.createConnection(testData.host, testData.user, testData.database);
});

afterEach(async () => {
    await MysqlUtils.endConnection();
});