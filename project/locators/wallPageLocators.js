const {By} = require('selenium-webdriver');

const wallPageLocators = {
    'authorField': By.xpath("//h1[@class='page_name']"),
    findPostWithText: (postId, expectedText) => By.xpath(`//div[contains(@id,'${postId}')]//div[text()='${expectedText}']`),
    findNextCommentButton: (postId) => By.xpath(`//div[contains(@class,'replies_list') and contains(@id,'${postId}')]//a`),
    findCommentWithText: (postId, expectedText) => By.xpath(`//div[contains(@id,'${postId}')]//div[@class='wall_reply_text' and text()='${expectedText}']`),
    findPost: (postId) => By.xpath(`//div[contains(@id,'${postId}')]`),
    findPostTextField: (postId) => By.xpath(`//div[contains(@id,'${postId}')]//div[contains(@class,'wall_post_text')]`),
    findPostAuthorField: (postId) => By.xpath(`//div[contains(@id,'${postId}')]//a[@class='author']`),
    findPostCommentField: (postId) => By.xpath(`//div[contains(@id,'${postId}')]//div[@class='wall_reply_text']`),
    findPostCommentAuthorField: (postId) => By.xpath(`//div[contains(@id,'${postId}')]//a[@class='author']`),
    findPostLikeButton: (postId) => By.xpath(`//div[contains(@id,'${postId}')]//a[contains(@class,'like_btn')]`)
};

module.exports = {wallPageLocators};