const BasePage = require("../../framework/basePage/basePage");
const {wallPageLocators} = require("../locators/wallPageLocators");
const Post = require("../../framework/baseElement/post");
const Button = require("../../framework/baseElement/button");
const Label = require("../../framework/baseElement/label");
const Browser = require("../../framework/browser/browser");
const {until} = require('selenium-webdriver');
const {testData} = require("../../testData/test.data");
const Logger = require('../../framework/utils/logger');

class WallPage extends BasePage {

    async _getAuthorField() {
        return new Label('authorField', wallPageLocators.authorField);
    }

    async _getPost(postId, expectedText) {
        return new Post('post', wallPageLocators.findPostWithText(postId, expectedText));
    }

    async _getPostTextField(postId) {
        return new Post('postTextField', wallPageLocators.findPostTextField(postId));
    }

    async _getPostAuthorField(postId) {
        return new Post('postAuthorField', wallPageLocators.findPostAuthorField(postId));
    }

    async _getPostCommentField(postId) {
        return new Post('postCommentField', wallPageLocators.findPostCommentField(postId));
    }

    async _getPostCommentAuthorField(postId) {
        return new Post('postCommentAuthorField', wallPageLocators.findPostCommentAuthorField(postId));
    }

    async _getPostLikeButton(postId) {
        return new Button('postLikeButton', wallPageLocators.findPostLikeButton(postId));
    }

    async _getNextCommentButton(postId) {
        return new Button('nextCommentButton', wallPageLocators.findNextCommentButton(postId));
    }

    async getAuthorText() {
        Logger.infoLog('Getting Author');
        return (await this._getAuthorField()).getText();
    }

    async getPostText(postId) {
        Logger.infoLog(`Getting text of post ${postId}`);
        return (await this._getPostTextField(postId)).getText();
    }

    async getPostAuthor(postId) {
        Logger.infoLog('Getting Author of post');
        return (await this._getPostAuthorField(postId)).getText();
    }

    async clickNextCommentButton(postId) {
        Logger.infoLog('Click on next comment button');
        return (await this._getNextCommentButton(postId)).click();
    }

    async getPostCommentText(postId) {
        Logger.infoLog('Getting text of post comment');
        return (await this._getPostCommentField(postId)).getText();
    }

    async getPostCommentAuthor(postId) {
        Logger.infoLog('Getting post comment author');
        return (await this._getPostCommentAuthorField(postId)).getText();
    }

    async clickLikeButton(postId) {
        Logger.infoLog('Click on like button');
        return (await this._getPostLikeButton(postId)).click();
    }

    async deletedPostIsDisplayed(postId, expectedText) {
        Logger.infoLog('Checking displaying of deleted post');
        return (await this._getPost(postId, expectedText)).isElementDisplayed();
    }

    async waitingPostWithText(postId, expectedText) {
        Logger.infoLog(`Waiting edited post ${postId} with expected text ${expectedText}`);
        return Browser.wait(until.elementLocated(wallPageLocators.findPostWithText(postId, expectedText)), testData.timeoutValue);
    }

    async waitingNextCommentButton(postId) {
        return Browser.wait(until.elementLocated(wallPageLocators.findNextCommentButton(postId)), testData.timeoutValue);
    }

    async waitingExpectedCommentWithText(postId, expectedText) {
        return Browser.wait(until.elementLocated(wallPageLocators.findCommentWithText(postId, expectedText)), testData.timeoutValue);
    }

    async waitingPostIsNotVisible(postId, expectedText) {
        return Browser.wait(until.elementIsNotVisible(await Browser.driver.findElement(wallPageLocators.findPostWithText(postId, expectedText)), testData.timeoutValue));
    }
    
}

module.exports = WallPage;