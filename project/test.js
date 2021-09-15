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
const {imagesComparing} = require('../framework/utils/imagesComparing');

beforeEach(async () => {
   await Browser.init(testData.browserNameChrome);
});

it('VK sign in and operations with post', async () => {
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
    const postId = await VkApiUtils.createPost(randomText);
    await Logger.infoLog(`Post ID of the created post is ${postId}`);
    let wallPage = new WallPage();
    expect (await wallPage.getPostText(postId)).to.eql(randomText);
    expect (await wallPage.getPostAuthor(postId)).to.eql(testData.author)
    const uploadUrl = await VkApiUtils.getWallUploadServer(postId);;
    const image = await fs.readFile(testData.filePath);
    const form = new FormData();
    form.append(testData.formDataKey, image, testData.formDataValue);
    const returnedDataOfUploadedPhoto = await (await VkApiUtils.uploadPhotoToUrl(uploadUrl, form));
    const photo = returnedDataOfUploadedPhoto.photo;
    const server = returnedDataOfUploadedPhoto.server;
    const hash = returnedDataOfUploadedPhoto.hash;
    const photoId = await VkApiUtils.saveWallPhoto(photo, server, hash);
    const randomTextEdited = randomStr(testData.randomStringLength);
    await VkApiUtils.editPost(postId, randomTextEdited, photoId);
    await wallPage.waitingExpectedPostWithText(postId, randomTextEdited);
    const uploadedImageUrl = await VkApiUtils.getPhotoUrl(photoId);
    await Browser.downloadImageByUrl(uploadedImageUrl, testData.pathToUploadedImage);
    const imageDifference = await imagesComparing();
    expect (await imageDifference).to.eql(testData.expectedImageDifference);
    expect (await wallPage.getPostText(postId)).to.eql(randomTextEdited);
    const randomComment = `Test Comment ${randomStr(testData.randomStringLength)}`;
    await VkApiUtils.addComment(postId, randomComment);
    await wallPage.clickNextCommentButton(postId);
    expect (await wallPage.getPostCommentText(postId)).to.eql(randomComment);
    expect (await wallPage.getPostCommentAuthor(postId)).to.eql(testData.author);
    await wallPage.clickLikeButton(postId);
    const returnedLikesData = await VkApiUtils.getPostLikes(postId);
    const likesCountValue = returnedLikesData.likesCountValue;
    const likeFromFirstName = returnedLikesData.likeFromFirstName;
    const likeFromLastName = returnedLikesData.likeFromLastName;
    expect (likesCountValue).to.eql(testData.expectedLikesCountValue);
    expect (`${likeFromFirstName} ${likeFromLastName}`).to.eql(testData.author);
    await VkApiUtils.deletePost(postId);
    await wallPage.waitingPostIsNotVisible(postId, randomTextEdited);
    expect (await wallPage.deletedPostIsDisplayed(postId, randomTextEdited)).to.be.false;
});

afterEach(async () => {
    await Browser.quit();
});


