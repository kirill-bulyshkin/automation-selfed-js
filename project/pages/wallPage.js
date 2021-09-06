const BasePage = require("../../framework/basePage/basePage");
const {locators} = require("../locators/locators");
const Post = require("../../framework/baseElement/post");

class WallPage extends BasePage {

    async getPostTextField(postId) {
        return new Post('postTextField', locators.findPostTextField(postId));
    }

    async getPostAuthorField(postId) {
        return new Post('postAuthorField', locators.findPostAuthorField(postId));
    }

    async getPostText(postId) {
        return (await this.getPostTextField(postId)).getText();
    }

    async getPostAuthor(postId) {
        return (await this.getPostAuthorField(postId)).getText();
    }
    
}

module.exports = WallPage;