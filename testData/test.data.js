const testData = {
    'link': 'https://userinyerface.com/game.html%20target=',
    'welcomeText': 'Hi and welcome to User Inyerface',
    'timerStartValue': '00:00:00',
    'secondLoginPageValue': '2 / 4',
    'expectedErrorText': 'Please upload a picture'
};

const locators = {
    'cookiesObject': "//div[@class='cookies']",
    'listOfCheckboxes': "//*[@class='checkbox__box']",
    'listOfErrors': "//*[@class='avatar-and-interests__errors-list']/li"
}

module.exports = {testData, locators};