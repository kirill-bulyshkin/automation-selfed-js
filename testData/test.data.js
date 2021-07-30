const testData = {
    'browserName': 'chrome',
    'link': 'https://userinyerface.com/game.html%20target=',
    'welcomeText': 'Hi and welcome to User Inyerface',
    'timerStartValue': '00:00:00',
    'secondLoginPageValue': '2 / 4',
    'expectedErrorText': 'Please upload a picture',
    'timeoutValue' : 2000
};

const locators = {
    'cookiesObject': "//div[@class='cookies']",
    'listOfCheckboxes': "//*[@class='checkbox__box']",
    'listOfErrors': "//*[@class='avatar-and-interests__errors-list']/li",
    'welcomePageText':"//p[@class='start__paragraph']",
    'secondPageLinkClick': "//a[@class='start__link']",
    'helpFormClassAttribute':"//*[@id='app']/div/div[2]",
    'hideHelpButtonClick': "//button[@class='button button--solid button--blue help-form__send-to-bottom-button']",
    'acceptCookiesButtonClick':"//button[@class='button button--solid button--transparent']",
    'timerValue': "//div[@class='timer timer--white timer--center']",
    'loginForm': "//div[@class='login-form__container']",
    'passwordField': "//input[@placeholder='Choose Password']",
    'emailField': "//input[@placeholder='Your email']",
    'domainField': "//input[@placeholder='Domain']",
    'domainDropdownClick': "//div[@class='dropdown__opener']",
    'dropdownItemClick': "//div[@class='dropdown__list-item']",
    'checkboxClick': "//*[@class='icon icon-check checkbox__check']",
    'nextButtonClick': "//*[@class='button--secondary']",
    'secondLoginPageText': "//*[@class='page-indicator']",
    'unselectAllCheckboxClick': "//*[@for='interest_unselectall']/span",
    'secondNextButtonClick': "//*[@class='button button--stroked button--white button--fluid']",
    'expectedErrorText': "//*[@class='avatar-and-interests__error']"
}

module.exports = {testData, locators};