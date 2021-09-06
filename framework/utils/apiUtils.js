const axios = require('axios');

class ApiUtils {
    
    async sendGetRequest(link, validateStatus) {
        return axios.get(link, {validateStatus: validateStatus})
    }

    async sendPostRequest(link, body, title, userId) {
        return axios.post(link, {
            "body": body,
            "title": title,
            "userId": userId
        })
    }
}

module.exports = ApiUtils;