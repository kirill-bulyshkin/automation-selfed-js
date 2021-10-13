const {requests} = require('../../project/requests/requests');
const Logger = require('../utils/logger');
const mysql = require('mysql2');

class MysqlUtils {

    static async createConnection(host, user, database) {
        Logger.infoLog(`Creating connection with MySQL database`);
        this.connection = 
            mysql.createConnection({
                host: host,
                user: user,
                database: database
        });
    }
    
    static async minTestsTime(unit) {
        Logger.infoLog(`Getting min time of each test run`);
        this.connection.query(
            requests.minTestsTime(unit),
            function(results, fields) {
                console.log(results);
                console.log(fields);
            }
        );
    }

    static async amountOfUniqueTests(countOf) {
        Logger.infoLog(`Getting all projects with amount of the unique tests`);
        this.connection.query(
            requests.amountOfUniqueTests(countOf),
            function(results, fields) {
                console.log(results);
                console.log(fields);
            }
        );
    }

    static async testsFromDate(dateFrom) {
        Logger.infoLog(`Getting all all tests from specific date`);
        this.connection.query(
            requests.testsFromDate(dateFrom),
            function(results, fields) {
                console.log(results);
                console.log(fields);
            }
        );
    }

    static async testsPerBrowsers(browserOne, browserTwo) {
        Logger.infoLog(`Getting amount of the tests performed on specific browsers`);
        this.connection.query(
            requests.testsPerBrowsers(browserOne, browserTwo),
            function(results, fields) {
                console.log(results);
                console.log(fields);
            }
        );
    }

    static async endConnection() {
        this.connection.end();
    }

}

module.exports = MysqlUtils;