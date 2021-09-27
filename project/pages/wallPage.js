const BasePage = require("../../framework/basePage/basePage");
const {locators} = require("../locators/locators");
const Post = require("../../framework/baseElement/post");
const Button = require("../../framework/baseElement/button");
const Label = require("../../framework/baseElement/label");
const Browser = require("../../framework/browser/browser");
const {until} = require('selenium-webdriver');
const {testData} = require("../../testData/test.data");
const Logger = require('../../framework/utils/logger');

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

    async getAuthorText() {
        Logger.infoLog('Getting Author');
        return (await this._getAuthorField()).getText();
    }

    async getPostText(postId) {
        Logger.infoLog('Getting text of post');
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