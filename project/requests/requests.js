const {testData} = require('../../testData/test.data');

const requests = {
    'getToken': `${testData.apiLink}/token/get?variant=${testData.examVariant}`,
    getTestsListInJson: (projectId) => `${testData.apiLink}/test/get/json?projectId=${projectId}`
}

module.exports = {requests};