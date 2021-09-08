const {expect} = require('chai');
const {testData} = require('../testData/test.data');
const {locators} = require('../project/locators/locators');
const {randomStr} = require('../framework/utils/randomGenerator');
const Browser = require('../framework/browser/browser');
const LoginPage = require('../project/pages/loginPage');
const NavigationBarPage = require('../project/pages/navigationBarPage');
const WallPage = require('../project/pages/wallPage');
const VkApiUtils = require('../framework/utils/vkApiUtils');
const Logger = require('../framework/utils/logger');

before(async () => {
   await Browser.init(testData.browserNameChrome);
});

it('TEST', async () => {
    let postId;
    await Browser.navigate(testData.link);
    // await Browser.windowMaximize();
    let loginPage = new LoginPage();
    const webSiteLanguage = testData.rusWebSite;
    if (webSiteLanguage == testData.engWebSite) {
        await loginPage.setWebsiteLanguage(locators.engLanguage);
        await loginPage.waitingSwitchingToEnglish();
    };
    await loginPage.setLoginValue(testData.login);
    await loginPage.setPasswordValue(testData.password);
    await loginPage.loginButtonClick();
    let navigationBarPage = new NavigationBarPage();
    await Browser.setTimeout();
    await navigationBarPage.myPageButtonClick();
    const randomText = `QA test ${randomStr(testData.randomStringLength)}`;
    await Logger.infoLog(`Generated text is ${randomText}`);
    await VkApiUtils.createPost(randomText).then(res => {
        postId = res.data.response.post_id;
    });
    await Logger.infoLog(`Post ID of the created post is ${postId}`);
    let wallPage = new WallPage();
    expect (await wallPage.getPostText(postId)).to.eql(randomText);
    expect (await wallPage.getPostAuthor(postId)).to.eql(testData.author)
    const randomTextEdited = `${randomText} Edited`;
    await VkApiUtils.editPost(postId, randomTextEdited);
    await wallPage.waitingExpectedPostWithText(postId, randomTextEdited);
    expect (await wallPage.getPostText(postId)).to.eql(randomTextEdited);
    const randomComment = `Test Comment ${randomStr(testData.randomStringLength)}`;
    await VkApiUtils.addComment(postId, randomComment);
    await wallPage.clickNextCommentButton(postId);
    expect (await wallPage.getPostCommentText(postId)).to.eql(randomComment);
    expect (await wallPage.getPostCommentAuthor(postId)).to.eql(testData.author);
    await wallPage.clickLikeButton(postId);
    let likesCountValue;
    let likeFromFirstName;
    let likeFromLastName;
    await VkApiUtils.getPostLikes(postId).then(res => {
        likesCountValue = res.data.response.count;
        likeFromFirstName = res.data.response.items[testData.firstItem].first_name;
        likeFromLastName = res.data.response.items[testData.firstItem].last_name;
    });
    expect (likesCountValue).to.eql(testData.expectedLikesCountValue);
    expect (`${likeFromFirstName} ${likeFromLastName}`).to.eql(testData.author);
    await VkApiUtils.deletePost(postId);
    await wallPage.waitingPostIsNotVisible(postId, randomTextEdited);
    expect (await wallPage.deletedPostIsDisplayed(postId, randomTextEdited)).to.eql(testData.deletedPostIsNotDisplayed);
});


// after(async () => {
//     await Browser.driver.quit();
// });


