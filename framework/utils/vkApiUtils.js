const axios = require('axios');
const Logger = require('./logger');
const {testData} = require('../../testData/test.data');

class VkApiUtils {

    static async createPost(randomText) {
        Logger.infoLog(`Post creating`)
        const res = await axios.post(`${testData.vkApiLink}wall.post?owner_id=${testData.userId}&message=${randomText}&access_token=${testData.token}&v=${testData.apiVersion}`);
        const postId = await res.data.response.post_id;
        return postId;
    }

    static async editPost(postId, editedText, photoId) {
        Logger.infoLog(`Post editing`)
        return axios.post(`${testData.vkApiLink}wall.edit?owner_id=${testData.userId}&post_id=${postId}&message=${editedText}&attachments=photo${testData.userId}_${photoId}&access_token=${testData.token}&v=${testData.apiVersion}`)
    }

    static async addComment(postId, randomComment) {
        Logger.infoLog(`Adding comment`)
        return axios.get(`${testData.vkApiLink}wall.createComment?owner_id=${testData.userId}&post_id=${postId}&message=${randomComment}&access_token=${testData.token}&v=${testData.apiVersion}`)
    }

    static async getPostLikes(postId) {
        Logger.infoLog(`Getting post likes`)
        const res = await axios.get(`${testData.vkApiLink}likes.getList?type=post&owner_id=${testData.userId}&item_id=${postId}&access_token=${testData.token}&v=${testData.apiVersion}&extended=${testData.likesListExt}`);
        const likesCountValue = res.data.response.count;
        const likeFromFirstName = res.data.response.items[testData.firstItem].first_name;
        const likeFromLastName = res.data.response.items[testData.firstItem].last_name;
        return {likesCountValue, likeFromFirstName, likeFromLastName};
    }

    static async deletePost(postId) {
        Logger.infoLog(`Post deleting`)
        return axios.get(`${testData.vkApiLink}wall.delete?post_id=${postId}&owner_id=${testData.userId}&access_token=${testData.token}&v=${testData.apiVersion}`)
    }

    static async getWallUploadServer(postId) {
        Logger.infoLog(`Getting server to upload photo`)
        const res = await axios.get(`${testData.vkApiLink}photos.getWallUploadServer?&owner_id=${testData.userId}?post_id=${postId}&access_token=${testData.token}&v=${testData.apiVersion}`);
        const uploadUrl = res.data.response.upload_url;
        return uploadUrl;
    }

    static async uploadPhotoToUrl(uploadUrl, form) {
        Logger.infoLog(`Uploading photo to URL`)
        const res = await axios.post(uploadUrl, form, {
            headers: {
                ...form.getHeaders()
            }
        })
        const photo = res.data.photo;
        const server = res.data.server;
        const hash = res.data.hash;
        return {photo, server, hash};
    }
    
    static async saveWallPhoto(photo, server, hash) {
        Logger.infoLog(`Saving photo`)
        const res = await axios.post(`${testData.vkApiLink}photos.saveWallPhoto?&user_id=${testData.userId}&access_token=${testData.token}&v=${testData.apiVersion}&photo=${photo}&server=${server}&hash=${hash}`);
        const photoId = res.data.response[testData.arrayElement].id;
        return photoId;
    }

    static async getPhotoUrl(photoId) {
        Logger.infoLog(`Getting URL of the uploaded photo`)
        const res = await axios.get(`${testData.vkApiLink}photos.getById?photos=${testData.userId}_${photoId}&access_token=${testData.token}&v=${testData.apiVersion}`);
        const uploadedImageUrl = res.data.response[testData.arrayElement].sizes[testData.sizesElement].url;
        return uploadedImageUrl;
    }
}


module.exports = VkApiUtils;