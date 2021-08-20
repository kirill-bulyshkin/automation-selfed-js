const axios = require('axios');

class ApiUtils {

    static async sendGetRequest(link, validateStatus) {
        return axios.get(link, {validateStatus: validateStatus})
    }

    static async sendPostRequest(link, body, title, userId) {
        return axios.post(link, {
            "body": body,
            "title": title,
            "userId": userId
        })
    }
}

module.exports = ApiUtils;