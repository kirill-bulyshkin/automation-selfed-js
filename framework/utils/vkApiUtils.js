const Logger = require('./logger');
const {testData} = require('../../testData/test.data');
const {requests} = require('../../project/requests/requests');

class VkApiUtils {

    static async createPost(randomText) {
        Logger.infoLog(`Post creating`);
        const res = await requests.createPost(randomText);
        const postId = await res.data.response.post_id;
        return postId;
    }

    static async editPost(postId, editedText, photoId) {
        Logger.infoLog(`Post editing`);
        return requests.editPost(postId, editedText, photoId);
    }

    static async addComment(postId, randomComment) {
        Logger.infoLog(`Adding comment`);
        return requests.addComment(postId, randomComment);
    }

    static async getPostLikes(postId) {
        Logger.infoLog(`Getting post likes`);
        const res = await requests.getPostLikes(postId);
        const likesCountValue = res.data.response.count;
        const likeFromFirstName = res.data.response.items[testData.firstItem].first_name;
        const likeFromLastName = res.data.response.items[testData.firstItem].last_name;
        return {likesCountValue, likeFromFirstName, likeFromLastName};
    }

    static async deletePost(postId) {
        Logger.infoLog(`Post deleting`);
        return requests.deletePost(postId);
    }

    static async getWallUploadServer(postId) {
        Logger.infoLog(`Getting server to upload photo`);
        const res = await requests.getWallUploadServer(postId);
        const uploadUrl = res.data.response.upload_url;
        return uploadUrl;
    }

    static async uploadPhotoToUrl(uploadUrl, form) {
        Logger.infoLog(`Uploading photo to URL`);
        const res = await requests.uploadPhotoToUrl(uploadUrl, form);
        const photo = res.data.photo;
        const server = res.data.server;
        const hash = res.data.hash;
        return {photo, server, hash};
    }
    
    static async saveWallPhoto(photo, server, hash) {
        Logger.infoLog(`Saving photo`);
        const res = await requests.saveWallPhoto(photo, server, hash);
        const photoId = res.data.response[testData.arrayElement].id;
        return photoId;
    }

    static async getPhotoUrl(photoId) {
        Logger.infoLog(`Getting URL of the uploaded photo`);
        const res = await requests.getPhotoUrl(photoId);
        const uploadedImageUrl = res.data.response[testData.arrayElement].sizes[testData.sizesElement].url;
        return uploadedImageUrl;
    }
}


module.exports = VkApiUtils;