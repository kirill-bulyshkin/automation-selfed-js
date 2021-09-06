const {By} = require('selenium-webdriver');

const locators = {
    'loginField': By.xpath("//input[@id='index_email']"),
    'passwordField': By.xpath("//input[@id='index_pass']"),
    'loginButton': By.xpath("//button[@id='index_login_button']"),
    'myPageButton': By.xpath("//span[@class='left_label inl_bl']"),
    findPostTextField: (postId) => By.xpath(`//div[contains(@id,'${postId}')]//div[contains(@class,'wall_post_text')]`),
    findPostAuthorField: (postId) => By.xpath(`//div[contains(@id,'${postId}')]//a[@class='author']`)



    // 'lastPostTextField': By.xpath("//div[@class='wall_post_text zoom_text']"),
    // 'lastPostAuthor': By.xpath("//a[@class='author']"),
    // 'lastPostTextField': By.xpath(`//div[contains(@id,'7507')]/div`),
    // 'lastPostAuthor': By.xpath("//div[contains(@id,'7507']"),
    //div[contains(@id,'7763')]//div[contains(@class,'wall_post_text')] !!!
    //div[contains(@id,'7763')]//a[@class='author'] !!!
}

module.exports = {locators};