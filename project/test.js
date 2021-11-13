const {expect} = require('chai');
const {testData} = require('../testData/test.data');
const {path} = require('../testData/test.data');
const RandomGenerators = require('../framework/utils/randomGenerator');
const Browser = require('../framework/browser/browser');
const LoginPage = require('./pages/loginPage');
const AlertsPage = require('./pages/alertsPage');
const {randomStr} = require('../framework/utils/randomGenerator');
// const NavigationBarPage = require('./pages/navigationBarPage');
// const WallPage = require('./pages/wallPage');
// const VkApiUtils = require('../framework/utils/vkApiUtils');
// const Logger = require('../framework/utils/logger');
// const FormData = require('form-data');
// const fs = require('fs/promises');
// const ImageUtils = require('../framework/utils/imagesComparing');
// const DownloadUtils = require('../framework/utils/downloadUtils');

// it('Basic Authorization', async () => {
//     await Browser.navigate(`${testData.hostForBasicAuth(testData.login, testData.password)}${path.basicAuth}`);
//     await Browser.windowMaximize();
//     const loginPage = new LoginPage();
//     expect (await loginPage.getSuccessfullAuthText()).to.eql(testData.congratulationsText);
// });

it('Alerts', async () => {
    await Browser.navigate(`${testData.host}${path.alerts}`);
    await Browser.windowMaximize();
    const alertsPage = new AlertsPage();
    expect (await alertsPage.isDisplayed()).to.eql(testData.pageIsDisplaying);
    await alertsPage.jsAlertButtonClick();
    expect (await alertsPage.getAlertText()).to.eql(testData.jsAlertTitle);
    await alertsPage.acceptAlert();
    expect (await alertsPage.alertIsPresent()).to.eql(testData.alertIsNotPresent);
    expect (await alertsPage.getResultText()).to.eql(testData.resultAlertText);
    await alertsPage.jsConfirmButtonClick();
    expect (await alertsPage.getAlertText()).to.eql(testData.jsConfirmTitle);
    await alertsPage.acceptAlert();
    expect (await alertsPage.alertIsPresent()).to.eql(testData.alertIsNotPresent);
    expect (await alertsPage.getResultText()).to.eql(testData.resultConfirmText);
    await alertsPage.jsPromptButtonClick();
    expect (await alertsPage.getAlertText()).to.eql(testData.jsPromptTitle);
    const randomText = randomStr(testData.randomStringLength);
    await alertsPage.sendKeysToAlert(randomText);
    await alertsPage.acceptAlert();
    expect (await alertsPage.getResultText()).to.eql(testData.resultPromptText(randomText));
});




    // const loginPage = new LoginPage();
    // await loginPage.waitingAlert();
    // await Browser.sleep();
    // await Browser.switchToAlert();
    // await Browser.alertAuthenticate(testData.login, testData.password);


    // const loginPage = new LoginPage();
    // await loginPage.authorize(testData.login, testData.password);
    // const navigationBarPage = new NavigationBarPage();
    // await navigationBarPage.waitingMyPageButton();
    // await navigationBarPage.myPageButtonClick();
    // const randomText = RandomGenerators.randomStr(testData.randomStringLength);
    // await Logger.infoLog(`Generated text is ${randomText}`);
    // const postId = await VkApiUtils.createPost(randomText);
    // await Logger.infoLog(`Post ID of the created post is ${postId}`);
    // const wallPage = new WallPage();
    // const author = await wallPage.getAuthorText();
    // await wallPage.waitingPostWithText(postId, randomText);
    // expect (await wallPage.getPostText(postId)).to.eql(randomText);
    // expect (await wallPage.getPostAuthor(postId)).to.eql(author)
    // const uploadUrl = await VkApiUtils.getWallUploadServer(postId);;
    // const image = await fs.readFile(testData.filePath);
    // const form = new FormData();
    // form.append(testData.formDataKey, image, testData.formDataValue);
    // let {photo, server, hash} = await VkApiUtils.uploadPhotoToUrl(uploadUrl, form);
    // const photoId = await VkApiUtils.saveWallPhoto(photo, server, hash);
    // const randomTextEdited = RandomGenerators.randomStr(testData.randomStringLength);
    // await VkApiUtils.editPost(postId, randomTextEdited, photoId);
    // await wallPage.waitingPostWithText(postId, randomTextEdited);
    // const uploadedImageUrl = await VkApiUtils.getPhotoUrl(photoId);
    // const downloadUtils = new DownloadUtils();
    // await downloadUtils.downloadImageByUrl(uploadedImageUrl, testData.pathToUploadedImage);
    // const imageUtils = new ImageUtils();
    // const imageDifference = await imageUtils.imagesComparing();
    // expect (imageDifference).to.eql(testData.expectedImageDifference);
    // expect (await wallPage.getPostText(postId)).to.eql(randomTextEdited);
    // const randomComment = RandomGenerators.randomStr(testData.randomStringLength);
    // await VkApiUtils.addComment(postId, randomComment);
    // await wallPage.waitingNextCommentButton(postId);
    // await wallPage.clickNextCommentButton(postId);
    // await wallPage.waitingExpectedCommentWithText(postId, randomComment);
    // expect (await wallPage.getPostCommentText(postId)).to.eql(randomComment);
    // expect (await wallPage.getPostCommentAuthor(postId)).to.eql(author);    
    // await wallPage.clickLikeButton(postId);
    // const returnedLikesData = await VkApiUtils.getPostLikes(postId);
    // const likesCountValue = returnedLikesData.likesCountValue;
    // const likeFromFirstName = returnedLikesData.likeFromFirstName;
    // const likeFromLastName = returnedLikesData.likeFromLastName;
    // expect (likesCountValue).to.eql(testData.expectedLikesCountValue);
    // expect (`${likeFromFirstName} ${likeFromLastName}`).to.eql(author);
    // await VkApiUtils.deletePost(postId);
    // await wallPage.waitingPostIsNotVisible(postId, randomTextEdited);
    // expect (await wallPage.deletedPostIsDisplayed(postId, randomTextEdited)).to.be.false;
