const Logger = require('./logger');
const {requests} = require('../../project/requests/requests');
const axios = require('axios');

class TDApiUtils {

    static async getToken() {
        Logger.infoLog('Getting token');
        const res = (await axios.post(requests.getToken)).data;
        return res;
    }

    static async getTestsListInJson(projectId) {
        Logger.infoLog('Getting tests list in JSON format');
        const res = (await axios.post(requests.getTestsListInJson(projectId))).data;
        return res;
    }

    // static async editPost(postId, editedText, photoId) {
    //     Logger.infoLog(`Editing post with ID '${postId}'`);
    //     return axios.post(requests.editPost(postId, editedText, photoId));
    // }

    // static async addComment(postId, randomComment) {
    //     Logger.infoLog(`Adding comment to the post ${postId}`);
    //     return axios.get(requests.addComment(postId, randomComment));
    // }

    // static async getPostLikes(postId) {
    //     Logger.infoLog(`Getting post likes of the post ${postId}`);
    //     const res = await axios.get(requests.getPostLikes(postId));
    //     const likesCountValue = res.data.response.count;
    //     const likeFromFirstName = res.data.response.items[vkProjectTestData.firstItem].first_name;
    //     const likeFromLastName = res.data.response.items[vkProjectTestData.firstItem].last_name;
    //     return {likesCountValue, likeFromFirstName, likeFromLastName};
    // }

    // static async deletePost(postId) {
    //     Logger.infoLog(`Post deleting ${postId}`);
    //     return axios.get(requests.deletePost(postId));
    // }

    // static async getWallUploadServer(postId) {
    //     Logger.infoLog(`Getting server to upload photo to the post ${postId}`);
    //     const uploadUrl = (await axios.get(requests.getWallUploadServer(postId))).data.response.upload_url;
    //     return uploadUrl;
    // }

    // static async uploadPhotoToUrl(uploadUrl, form) {
    //     Logger.infoLog(`Uploading photo to ${uploadUrl}`);
    //     let {photo, server, hash} = (await axios.post(uploadUrl, form, {headers: {...form.getHeaders()}})).data;
    //     return {photo, server, hash};
    // }
    
    // static async saveWallPhoto(photo, server, hash) {
    //     Logger.infoLog(`Saving photo ${photo}`);
    //     const photoId = (await axios.post(requests.saveWallPhoto(photo, server, hash))).data.response[vkProjectTestData.arrayElement].id;
    //     return photoId;
    // }

    // static async getPhotoUrl(photoId) {
    //     Logger.infoLog(`Getting URL of the uploaded photo ${photoId}`);
    //     const uploadedImageUrl = (await axios.get(requests.getPhotoUrl(photoId))).data.response[vkProjectTestData.arrayElement].sizes[vkProjectTestData.sizesElement].url;
    //     return uploadedImageUrl;
    // }
}


module.exports = TDApiUtils;