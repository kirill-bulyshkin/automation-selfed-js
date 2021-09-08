const {By} = require('selenium-webdriver');

const locators = {
    'engLanguage': By.xpath("//a[@class='footer_lang_link' and text()='English']"),
    'rusLanguage': By.xpath("//a[@class='footer_lang_link' and text()='Русский']"),
    'engLoginField': By.xpath("//input[@id='index_email' and @placeholder='Phone or email']"),
    'loginField': By.xpath("//input[@id='index_email']"),
    'passwordField': By.xpath("//input[@id='index_pass']"),
    'loginButton': By.xpath("//button[@id='index_login_button']"),
    'myPageButton': By.xpath("//span[@class='left_label inl_bl']"),
    findPostWithText: (postId, expectedText) => By.xpath(`//div[contains(@id,'${postId}')]//div[text()='${expectedText}']`),
    findNextCommentButton: (postId) => By.xpath(`//div[contains(@class,'replies_list') and contains(@id,'${postId}')]//a`),
    findCommentWithText: (postId, expectedText) => By.xpath(`//div[contains(@id,'${postId}')]//div[@class='wall_reply_text' and text()='${expectedText}']`),
    findPost: (postId) => By.xpath(`//div[contains(@id,'${postId}')]`),
    findPostTextField: (postId) => By.xpath(`//div[contains(@id,'${postId}')]//div[contains(@class,'wall_post_text')]`),
    findPostAuthorField: (postId) => By.xpath(`//div[contains(@id,'${postId}')]//a[@class='author']`),
    findPostCommentField: (postId) => By.xpath(`//div[contains(@id,'${postId}')]//div[@class='wall_reply_text']`),
    findPostCommentAuthorField: (postId) => By.xpath(`//div[contains(@id,'${postId}')]//a[@class='author']`),
    findPostLikeButton: (postId) => By.xpath(`//div[contains(@id,'${postId}')]//a[contains(@class,'like_btn')]`),
}

module.exports = {locators};