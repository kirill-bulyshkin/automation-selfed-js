const {expect} = require('chai');
const {testData} = require('../testData/test.data');
const {randomStr} = require('../framework/utils/randomGenerator');
const Browser = require('../framework/browser/browser');
const LoginPage = require('../project/pages/loginPage');
const NavigationBarPage = require('../project/pages/navigationBarPage');
const WallPage = require('../project/pages/wallPage');
const VkApiUtils = require('../framework/utils/vkApiUtils');
const Logger = require('../framework/utils/logger');

const { locators } = require('./locators/locators');


before(async () => {
   await Browser.init(testData.browserNameChrome);
});

it('TEST', async () => {
    let postId;
    await Browser.navigate(testData.link);
    // await Browser.windowMaximize();
    let loginPage = new LoginPage();
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
    let wallPage = new WallPage();
    expect (await wallPage.getPostText(postId)).to.eql(randomText);
    expect (await wallPage.getPostAuthor(postId)).to.eql(testData.author)
    const randomTextEdited = `${randomText} Edited`;
    await VkApiUtils.editPost(postId, randomTextEdited).then(res => {
        console.log(res.data)
    });
    // await Browser.setTimeout();
    // async () => await timeout(1000);
    // this.timeout(1000);
    // var timeout = setTimeout(done, 1000); 
    // await driver.wait(until.elementTextIs(element, text), 5000)
    // const text = await wallPage.getPostTextField(postId);
    // console.log(text);

    // const postTextElementLocator = locators.findPostTextField(postId);
    // console.log(postTextElementLocator)
    await Browser.waitingExpectedPostText(postId, randomTextEdited);
    expect (await wallPage.getPostText(postId)).to.eql(randomTextEdited);


    // await VkApiUtils.sendGetRequest('https://api.vk.com/method/users.get?user_id=627657327&access_token=1d68447d1a3db836e6ac5e546ff70c273a5011925814086664867a724ea9b63129e62cac7fd9fae5854a5&v=5.103')
    // .then(res => {
    //     console.log(res.data)
    // })
});


// after(async () => {
//     await Browser.driver.quit();
// });


