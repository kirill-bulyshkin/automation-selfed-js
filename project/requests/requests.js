const {testData} = require('../../testData/test.data');

const requests = {
    'getToken': `${testData.apiLink}/token/get?variant=${testData.examVariant}`,
    getTestsListInJson: (projectId) => `${testData.apiLink}/test/get/json?projectId=${projectId}`,
    createTest: (SID, projectName, testName, methodName) => `${testData.apiLink}/test/put?SID=${SID}&projectName=${projectName}&testName=${testName}&methodName=${methodName}&env=localhost`,
    'sendLogs': `${testData.apiLink}/test/put/log`,
    'sendAttach': `${testData.apiLink}/test/put/attachment`
}

module.exports = {requests};