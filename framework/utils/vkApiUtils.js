const axios = require('axios');
const Logger = require('./logger');
const {testData} = require('../../testData/test.data');

class VkApiUtils {

    // static async getPosts() {
    //     Logger.infoLog(`Receiving request to ${testData.link}/posts`)
    //     return apiUtils.sendGetRequest(`${testData.link}/posts`)
    // }

    // static async sendGetRequest(link, validateStatus) {
    //     return axios.get(link, {validateStatus: validateStatus})
    // }

    static async createPost(randomText) {
        Logger.infoLog(`Post creating`)
        return axios.post(`${testData.vkApiLink}wall.post?owner_id=${testData.userId}&message=${randomText}&access_token=${testData.token}&v=${testData.apiVersion}`)
    }

    static async editPost(postId, editedText) {
        Logger.infoLog(`Post editing`)
        return axios.post(`${testData.vkApiLink}wall.edit?owner_id=${testData.userId}&post_id=${postId}&message=${editedText}&attachments=photo${testData.userId}_${testData.photoId}&access_token=${testData.token}&v=${testData.apiVersion}`)
    }

}


module.exports = VkApiUtils;