const {dbRequests} = require('./requests/dbRequests');
const Logger = require('../framework/utils/logger');
const DBUtils = require('../framework/utils/dbUtils');

class MysqlUtils extends DBUtils {

    static async minTestsTime(unit) {
        Logger.infoLog(`Getting min time of each test run`);
        this.sendRequestToDB(dbRequests.minTestsTime(unit))
    }

    static async amountOfUniqueTests(countOf) {
        Logger.infoLog(`Getting all projects with amount of the unique tests`);
        this.sendRequestToDB(dbRequests.amountOfUniqueTests(countOf))
    }

    static async testsFromDate(dateFrom) {
        Logger.infoLog(`Getting all all tests from specific date`);
        this.sendRequestToDB(dbRequests.testsFromDate(dateFrom))
    }

    static async testsPerBrowsers(browserOne, browserTwo) {
        Logger.infoLog(`Getting amount of the tests performed on specific browsers`);
        this.sendRequestToDB(dbRequests.testsPerBrowsers(browserOne, browserTwo))
    }

}

module.exports = MysqlUtils;