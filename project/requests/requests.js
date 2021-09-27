const {testData} = require('../../testData/test.data');

const requests = {
    createPost: (randomText) => `${testData.vkApiLink}wall.post?owner_id=${testData.userId}&message=${randomText}&access_token=${testData.token}&v=${testData.apiVersion}`,
    editPost: (postId, editedText, photoId) => `${testData.vkApiLink}wall.edit?owner_id=${testData.userId}&post_id=${postId}&message=${editedText}&attachments=photo${testData.userId}_${photoId}&access_token=${testData.token}&v=${testData.apiVersion}`,
    addComment: (postId, randomComment) => `${testData.vkApiLink}wall.createComment?owner_id=${testData.userId}&post_id=${postId}&message=${randomComment}&access_token=${testData.token}&v=${testData.apiVersion}`,
    getPostLikes: (postId) => `${testData.vkApiLink}likes.getList?type=post&owner_id=${testData.userId}&item_id=${postId}&access_token=${testData.token}&v=${testData.apiVersion}&extended=${testData.likesListExt}`,
    deletePost: (postId) => `${testData.vkApiLink}wall.delete?post_id=${postId}&owner_id=${testData.userId}&access_token=${testData.token}&v=${testData.apiVersion}`,
    getWallUploadServer: (postId) => `${testData.vkApiLink}photos.getWallUploadServer?&owner_id=${testData.userId}?post_id=${postId}&access_token=${testData.token}&v=${testData.apiVersion}`,
    saveWallPhoto: (photo, server, hash) => `${testData.vkApiLink}photos.saveWallPhoto?&user_id=${testData.userId}&access_token=${testData.token}&v=${testData.apiVersion}&photo=${photo}&server=${server}&hash=${hash}`,
    getPhotoUrl: (photoId) => `${testData.vkApiLink}photos.getById?photos=${testData.userId}_${photoId}&access_token=${testData.token}&v=${testData.apiVersion}`
}

module.exports = {requests};