const axios = require('axios');

class ApiUtils {

    constructor(link) {
        this.link = link;
    }

    async get() {
        return axios.get(this.link)
    }

    async post() {
        return axios.post(this.link, {
        })
    }
}

module.exports = ApiUtils;