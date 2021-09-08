const BasePage = require("../../framework/basePage/basePage");
const {locators} = require("../locators/locators");
const Post = require("../../framework/baseElement/post");
const Button = require("../../framework/baseElement/button");
const Browser = require("../../framework/browser/browser");
const {until} = require('selenium-webdriver');

class WallPage extends BasePage {

    async getPost(postId, expectedText) {
        return new Post('post', locators.findPostWithText(postId, expectedText));
    }

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

    async getNextCommentButton(postId) {
        return new Button('nextCommentButton', locators.findNextCommentButton(postId));
    }




    async getPostText(postId) {
        return (await this.getPostTextField(postId)).getText();
    }

    async getPostAuthor(postId) {
        return (await this.getPostAuthorField(postId)).getText();
    }

    async clickNextCommentButton(postId) {
        return (await this.getNextCommentButton(postId)).click();
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

    async deletedPostIsDisplayed(postId, expectedText) {
        return (await this.getPost(postId, expectedText)).elementIsDisplayed();
    }

    

    async waitingExpectedPostWithText(postId, expectedText) {
        return Browser.wait(until.elementLocated(locators.findPostWithText(postId, expectedText)), 5000);
    }

    async waitingExpectedCommentWithText(postId, expectedText) {
        return Browser.wait(until.elementLocated(locators.findCommentWithText(postId, expectedText)), 5000)
    }

    async waitingPostIsNotVisible(postId, expectedText) {
        return Browser.wait(until.elementIsNotVisible(await Browser.driver.findElement(locators.findPostWithText(postId, expectedText)), 5000));
    }
    
}

module.exports = WallPage;