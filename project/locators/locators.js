const {By} = require('selenium-webdriver');

const locators = {
    'loginField': By.xpath("//input[@id='index_email']"),
    'passwordField': By.xpath("//input[@id='index_pass']"),
    'loginButton': By.xpath("//button[@id='index_login_button']"),
    'myPageButton': By.xpath("//span[@class='left_label inl_bl']"),
    findPost: (postId) => By.xpath(`//div[contains(@id,'${postId}')]`),
    findPostTextField: (postId) => By.xpath(`//div[contains(@id,'${postId}')]//div[contains(@class,'wall_post_text')]`),
    findPostAuthorField: (postId) => By.xpath(`//div[contains(@id,'${postId}')]//a[@class='author']`),
    findPostCommentField: (postId) => By.xpath(`//div[contains(@id,'${postId}')]//div[@class='wall_reply_text']`),
    findPostCommentAuthorField: (postId) => By.xpath(`//div[contains(@id,'${postId}')]//a[@class='author']`),
    findPostLikeButton: (postId) => By.xpath(`//div[contains(@id,'${postId}')]//a[contains(@class,'like_btn')]`)



    // 'lastPostTextField': By.xpath("//div[@class='wall_post_text zoom_text']"),
    // 'lastPostAuthor': By.xpath("//a[@class='author']"),
    // 'lastPostTextField': By.xpath(`//div[contains(@id,'7507')]/div`),
    // 'lastPostAuthor': By.xpath("//div[contains(@id,'7507']"),
    //div[contains(@id,'7763')]//div[contains(@class,'wall_post_text')] !!!
    //div[contains(@id,'7763')]//a[@class='author'] !!!
}

module.exports = {locators};