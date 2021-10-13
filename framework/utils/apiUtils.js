const axios = require('axios');
const Logger = require ('../utils/logger');

class ApiUtils {
    
    async sendGetRequest(link, validateStatus) {
        Logger.infoLog(`Send GET request by ${link}`);
        return axios.get(link, {validateStatus: validateStatus})
    }

    async sendPostRequest(link, body, title, userId) {
        Logger.infoLog(`Send POST request by ${link}`);
        return axios.post(link, {
            "body": body,
            "title": title,
            "userId": userId
        })
    }
}

module.exports = ApiUtils;