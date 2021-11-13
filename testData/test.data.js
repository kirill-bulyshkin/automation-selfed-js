const testData = {
    'host': 'http://the-internet.herokuapp.com',
    hostForBasicAuth: (login, pass) => `http://${login}:${pass}@the-internet.herokuapp.com`,
    'login': 'admin',
    'password': 'admin',
    'congratulationsText': 'Congratulations! You must have the proper credentials.',
    'pageIsDisplaying': true,
    'jsAlertTitle': 'I am a JS Alert',
    'jsConfirmTitle': 'I am a JS Confirm',
    'jsPromptTitle': 'I am a JS prompt',
    'alertIsNotPresent': false,
    'resultAlertText': 'You successfully clicked an alert',
    'resultConfirmText': 'You clicked: Ok',
    'randomStringLength': 7,
    resultPromptText: (randomText) => `You entered: ${randomText}`,

    'token': 'ba8efbc9ceb02cfbdeeb54cdb7776afb97943105c7f14a42ce4ff32ddd0b3196de930233af6c29ea1a846',
    'userId': '627657327',
    'apiVersion': '5.131',
    'timeoutValue': 80000,
    'vkApiLink': 'https://api.vk.com/method/',
    'randomStringLength': 5,
    'likesListExt': 1,
    'firstItem': 0,
    'expectedLikesCountValue': 1,
    'filePath': './files/bear.jpg',
    'pathToUploadedImage': './uploadedFiles/uploadedImage.jpg',
    'formDataKey': 'photo',
    'formDataValue': 'bear.jpg',
    'arrayElement': 0,
    'sizesElement': 6,
    'expectedImageDifference': 0
};

const path = {
    'basicAuth': '/basic_auth',
    'alerts': '/javascript_alerts'
}

module.exports = {testData, path};