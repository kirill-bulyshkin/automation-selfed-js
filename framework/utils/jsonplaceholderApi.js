const ApiUtils = require('./apiUtils');
const Logger = require('./logger');
const {testData} = require('../../testData/test.data');
const apiUtils = new ApiUtils();

class JsonplaceholderApi {

    static async getPosts() {
        Logger.infoLog(`Receiving request to ${testData.link}/posts`)
        return apiUtils.sendGetRequest(`${testData.link}/posts`)
    }

    static async getPost(post) {
        Logger.infoLog(`Receiving GET request to ${testData.link}/posts/${post}`)
        return apiUtils.sendGetRequest(`${testData.link}/posts/${post}`)
    }

    static async getUnexistPost(post) {
        Logger.infoLog(`Receiving GET request to ${testData.link}/posts/${post}`)
        return apiUtils.sendGetRequest(`${testData.link}/posts/${post}`, false)
    }

    static async createPost(body, title, userId) {     
        Logger.infoLog(`Receiving POST request to ${testData.link}/posts`)
        return apiUtils.sendPostRequest(`${testData.link}/posts`, body, title, userId)
    }

    static async getUsers() {
        Logger.infoLog(`Receiving GET request to ${testData.link}/users`)
        return apiUtils.sendGetRequest(`${testData.link}/users`)
    }

    static async getUser(user) {
        Logger.infoLog(`Receiving GET request to ${testData.link}/users/${user}`)
        return apiUtils.sendGetRequest(`${testData.link}/users/${user}`)
    }
}

module.exports = JsonplaceholderApi;