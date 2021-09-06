const BasePage = require("../../framework/basePage/basePage");
const {locators} = require("../locators/locators");
const Post = require("../../framework/baseElement/post");
const Button = require("../../framework/baseElement/button");

class WallPage extends BasePage {

    async getPostTextField(postId) {
        return new Post('postTextField', locators.findPostTextField(postId));
    }

    async getPostAuthorField(postId) {
        return new Post('postAuthorField', locators.findPostAuthorField(postId));
    }

    async getPostCommentField(postId) {
        return new Post('postCommentField', locators.findPostCommentField(postId));
    }

    async getPostCommentAuthorField(postId) {
        return new Post('postCommentAuthorField', locators.findPostCommentAuthorField(postId));
    }

    async getPostLikeButton(postId) {
        return new Button('postLikeButton', locators.findPostLikeButton(postId));
    }



    async getPostText(postId) {
        return (await this.getPostTextField(postId)).getText();
    }

    async getPostAuthor(postId) {
        return (await this.getPostAuthorField(postId)).getText();
    }

    async getPostCommentText(postId) {
        return (await this.getPostCommentField(postId)).getText();
    }

    async getPostCommentAuthor(postId) {
        return (await this.getPostCommentAuthorField(postId)).getText();
    }

    async clickLikeButton(postId) {
        return (await this.getPostLikeButton(postId)).click();
    }
    
    async tryToFindDeletedPost(postId) {
        return this.findElements(locators.findPost(postId));
    }
    
}

module.exports = WallPage;