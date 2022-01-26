const Logger = require('./logger');
const {requests} = require('../../project/requests/requests');
const axios = require('axios');
const Browser = require('../browser/browser');

class TDApiUtils {

    static async getToken() {
        Logger.infoLog('Getting token');
        const res = (await axios.post(requests.getToken)).data;
        return res;
    }

    static async getTestsListInJson(projectId) {
        Logger.infoLog('Getting tests list in JSON format');
        const res = (await axios.post(requests.getTestsListInJson(projectId))).data;
        if (Array.isArray(res) == true) {   
            Logger.infoLog('Returned response has JSON format');
            return res;
        } else {
            Logger.errorLog(`Returned response is NOT in a JSON format. Closing browser`);
            await Browser.quit();

        }
    }

    static async createTest(SID, projectName, testName, methodName) {
        Logger.infoLog('Creating test');
        const request = requests.createTest(SID, projectName, testName, methodName);
        Logger.infoLog(`Sending the request ${request}`);
        const res = (await axios.post(request)).data;
        Logger.infoLog(`ID of the created test is ${res}`)
        return res;
    }

}

module.exports = TDApiUtils;