const BasePage = require("../../framework/basePage/basePage");
const {locators} = require("../locators/locators");
const Post = require("../../framework/baseElement/post");
const Button = require("../../framework/baseElement/button");
const Label = require("../../framework/baseElement/label");
const Browser = require("../../framework/browser/browser");
const {until} = require('selenium-webdriver');
const {testData} = require("../../testData/test.data");

class WallPage extends BasePage {

    async _getAuthorField() {
        return new Label('authorField', locators.authorField);
    }

    async _getPost(postId, expectedText) {
        return new Post('post', locators.findPostWithText(postId, expectedText));
    }

    async _getPostTextField(postId) {
        return new Post('postTextField', locators.findPostTextField(postId));
    }

    async _getPostAuthorField(postId) {
        return new Post('postAuthorField', locators.findPostAuthorField(postId));
    }

    async _getPostCommentField(postId) {
        return new Post('postCommentField', locators.findPostCommentField(postId));
    }

    async _getPostCommentAuthorField(postId) {
        return new Post('postCommentAuthorField', locators.findPostCommentAuthorField(postId));
    }

    async _getPostLikeButton(postId) {
        return new Button('postLikeButton', locators.findPostLikeButton(postId));
    }

    async _getNextCommentButton(postId) {
        return new Button('nextCommentButton', locators.findNextCommentButton(postId));
    }

    async _getAuthorText() {
        return (await this._getAuthorField()).getText();
    }

    async _getPostText(postId) {
        return (await this._getPostTextField(postId)).getText();
    }

    async _getPostAuthor(postId) {
        return (await this._getPostAuthorField(postId)).getText();
    }

    async clickNextCommentButton(postId) {
        return (await this._getNextCommentButton(postId)).click();
    }

    async getPostCommentText(postId) {
        return (await this._getPostCommentField(postId)).getText();
    }

    async getPostCommentAuthor(postId) {
        return (await this._getPostCommentAuthorField(postId)).getText();
    }

    async clickLikeButton(postId) {
        return (await this._getPostLikeButton(postId)).click();
    }

    async deletedPostIsDisplayed(postId, expectedText) {
        return (await this._getPost(postId, expectedText)).isElementDisplayed();
    }

    async waitingExpectedPostWithText(postId, expectedText) {
        return Browser.wait(until.elementLocated(locators.findPostWithText(postId, expectedText)), testData.timeoutValue);
    }

    async waitingExpectedCommentWithText(postId, expectedText) {
        return Browser.wait(until.elementLocated(locators.findCommentWithText(postId, expectedText)), testData.timeoutValue);
    }

    async waitingPostIsNotVisible(postId, expectedText) {
        return Browser.wait(until.elementIsNotVisible(await Browser.driver.findElement(locators.findPostWithText(postId, expectedText)), testData.timeoutValue));
    }
    
}

module.exports = WallPage;