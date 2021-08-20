const ApiUtils = require('./apiUtils');
const Logger = require('./logger');
const {testData} = require('../../testData/test.data');

class JsonplaceholderApi {

    static async getPosts() {
        Logger.infoLog(`Receiving request to ${testData.link}/posts`)
        return ApiUtils.sendGetRequest(`${testData.link}/posts`)
    }

    static async getPost(post) {
        Logger.infoLog(`Receiving GET request to ${testData.link}/posts/${post}`)
        return ApiUtils.sendGetRequest(`${testData.link}/posts/${post}`)
    }

    static async getUnexistPost(post) {
        Logger.infoLog(`Receiving GET request to ${testData.link}/posts/${post}`)
        return ApiUtils.sendGetRequest(`${testData.link}/posts/${post}`, false)
    }

    static async createPost(body, title, userId) {     
        Logger.infoLog(`Receiving POST request to ${testData.link}/posts`)
        return ApiUtils.sendPostRequest(`${testData.link}/posts`, body, title, userId)
    }

    static async getUsers() {
        Logger.infoLog(`Receiving GET request to ${testData.link}/users`)
        return ApiUtils.sendGetRequest(`${testData.link}/users`)
    }

    static async getUser(user) {
        Logger.infoLog(`Receiving GET request to ${testData.link}/users/${user}`)
        return ApiUtils.sendGetRequest(`${testData.link}/users/${user}`)
    }
}

module.exports = JsonplaceholderApi;