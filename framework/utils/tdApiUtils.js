const Logger = require('./logger');
const {requests} = require('../../project/requests/requests');
const axios = require('axios');

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
            Logger.errorLog(`Returned response is NOT in a JSON format`);
        }
    }

}

module.exports = TDApiUtils;