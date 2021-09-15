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
const FormData = require('form-data');
const fs = require('fs/promises');
const {imgDiff} = require("img-diff-js");

beforeEach(async () => {
   await Browser.init(testData.browserNameChrome);
});

it('VK sign in and operations with post', async () => {
    let postId;
    await Browser.navigate(testData.link);
    await Browser.windowMaximize();
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
    const randomText = randomStr(testData.randomStringLength);
    await Logger.infoLog(`Generated text is ${randomText}`);
    await VkApiUtils.createPost(randomText).then(res => {
        postId = res.data.response.post_id;
    });
    await Logger.infoLog(`Post ID of the created post is ${postId}`);
    let wallPage = new WallPage();
    expect (await wallPage.getPostText(postId)).to.eql(randomText);
    expect (await wallPage.getPostAuthor(postId)).to.eql(testData.author)
    let uploadUrl;
    await VkApiUtils.getWallUploadServer(postId).then(res => {
        uploadUrl = res.data.response.upload_url;
    });
    const image = await fs.readFile(testData.filePath);
    const form = new FormData();
    form.append(testData.formDataKey, image, testData.formDataValue);
    let photo;
    let server;
    let hash;
    await VkApiUtils.uploadPhotoToUrl(uploadUrl, form).then(res => {
        photo = res.data.photo;
        server = res.data.server;
        hash = res.data.hash;
    });
    let photoId;
    await VkApiUtils.saveWallPhoto(photo, server, hash).then(res => {
        photoId = res.data.response[testData.arrayElement].id;
    });
    const randomTextEdited = randomStr(testData.randomStringLength);
    await VkApiUtils.editPost(postId, randomTextEdited, photoId);
    await wallPage.waitingExpectedPostWithText(postId, randomTextEdited);
    let uploadedImageUrl;
    await VkApiUtils.getPhotoUrl(photoId).then(res => {
        uploadedImageUrl = res.data.response[testData.arrayElement].sizes[testData.sizesElement].url;
    });
    await Browser.downloadImageByUrl(uploadedImageUrl, testData.pathToUploadedImage);
    let imageDifference;
    await imgDiff({
        actualFilename: testData.filePath,
        expectedFilename: testData.pathToUploadedImage,
    }).then(result => imageDifference = result.diffCount);
    expect (await imageDifference).to.eql(testData.expectedImageDifference);
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
    expect (await wallPage.deletedPostIsDisplayed(postId, randomTextEdited)).to.be.false;
});

afterEach(async () => {
    await Browser.quit();
});


