const {testData} = require('../../testData/test.data');

const requests = {
    'getToken': `${testData.apiLink}/token/get?variant=${testData.examVariant}`
}

module.exports = {requests};