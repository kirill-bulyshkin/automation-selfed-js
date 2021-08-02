const {By} = require('selenium-webdriver');

const locators = {
    'cookiesObject': By.xpath("//div[@class='cookies']"),
    'interestsCheckbox': By.xpath("//*[@class='checkbox__box']"),
    'interestsNames': By.xpath("//span[not(@*)]"),
    'listOfErrors': By.xpath("//*[@class='avatar-and-interests__errors-list']/li"),
    'welcomeTextLabel': By.xpath("//p[@class='start__paragraph']"),
    'secondPageLink': By.xpath("//a[@class='start__link']"),
    'helpForm': By.xpath("//*[@id='app']/div/div[2]"),
    'hideHelpButton': By.xpath("//button[@class='button button--solid button--blue help-form__send-to-bottom-button']"),
    'acceptCookiesButton': By.xpath("//button[@class='button button--solid button--transparent']"),
    'timerArea': By.xpath("//div[@class='timer timer--white timer--center']"),
    'loginForm': By.xpath("//div[@class='login-form__container']"),
    'passwordField': By.xpath("//input[@placeholder='Choose Password']"),
    'emailField': By.xpath("//input[@placeholder='Your email']"),
    'domainField': By.xpath("//input[@placeholder='Domain']"),
    'domainDropdown': By.xpath("//div[@class='dropdown__opener']"),
    'dropdownItem': By.xpath("//div[@class='dropdown__list-item']"),
    'checkbox': By.xpath("//*[@class='icon icon-check checkbox__check']"),
    'nextButton': By.xpath("//*[@class='button--secondary']"),
    'secondLoginPageText': By.xpath("//*[@class='page-indicator']"),
    'unselectAllCheckbox': By.xpath("//*[@for='interest_unselectall']/span"),
    'secondNextButton': By.xpath("//*[@class='button button--stroked button--white button--fluid']"),
    'expectedError': By.xpath("//*[@class='avatar-and-interests__error']")
}

module.exports = {locators};