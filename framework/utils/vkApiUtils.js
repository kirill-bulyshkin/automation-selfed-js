const axios = require('axios');
const Logger = require('./logger');
const {testData} = require('../../testData/test.data');

class VkApiUtils {

    static async createPost(randomText) {
        Logger.infoLog(`Post creating`)
        return axios.post(`${testData.vkApiLink}wall.post?owner_id=${testData.userId}&message=${randomText}&access_token=${testData.token}&v=${testData.apiVersion}`)
    }

    static async editPost(postId, editedText) {
        Logger.infoLog(`Post editing`)
        return axios.post(`${testData.vkApiLink}wall.edit?owner_id=${testData.userId}&post_id=${postId}&message=${editedText}&attachments=photo${testData.userId}_${testData.photoId}&access_token=${testData.token}&v=${testData.apiVersion}`)
    }

    static async addComment(postId, randomComment) {
        Logger.infoLog(`Adding comment`)
        return axios.get(`${testData.vkApiLink}wall.createComment?owner_id=${testData.userId}&post_id=${postId}&message=${randomComment}&access_token=${testData.token}&v=${testData.apiVersion}`)
    }

    static async getPostLikes(postId) {
        Logger.infoLog(`Getting post likes`)
        return axios.get(`${testData.vkApiLink}likes.getList?type=post&owner_id=${testData.userId}&item_id=${postId}&access_token=${testData.token}&v=${testData.apiVersion}&extended=${testData.likesListExt}`)
    }

    static async deletePost(postId) {
        Logger.infoLog(`Post deleting`)
        return axios.get(`${testData.vkApiLink}wall.delete?post_id=${postId}&owner_id=${testData.userId}&access_token=${testData.token}&v=${testData.apiVersion}`)
    }
}


module.exports = VkApiUtils;