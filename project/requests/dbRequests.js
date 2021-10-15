const {testData} = require('../../testData/test.data');

const dbRequests = {
    minTestsTime: (unit) => `SELECT project.name AS PROJECT, test.name AS TEST, TIMESTAMPDIFF(${unit}, start_time, end_time) AS MIN_WORK_TIME FROM ${testData.table} INNER JOIN project ON test.project_id = project.id ORDER BY PROJECT, TEST;`,
    amountOfUniqueTests: (countOf) => `SELECT project.name AS PROJECTS, COUNT(DISTINCT ${countOf}) AS TESTS_COUNT FROM ${testData.table} INNER JOIN project ON test.project_id = project.id GROUP BY project.name;`,
    testsFromDate: (dateFrom) => `SELECT project.name AS PROJECT, test.name AS TEST, test.start_time AS DATE FROM ${testData.table} INNER JOIN project ON test.project_id = project.id WHERE test.start_time BETWEEN (${dateFrom}) AND CURDATE() ORDER BY PROJECT, TEST;`,
    testsPerBrowsers: (browserOne, browserTwo) => `SELECT COUNT(test.browser) AS BROWSERS FROM ${testData.table} WHERE test.browser = "${browserOne}" UNION SELECT COUNT(test.browser) FROM ${testData.table} WHERE test.browser = "${browserTwo}";`
}

module.exports = {dbRequests};