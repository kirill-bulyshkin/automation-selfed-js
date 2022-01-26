const testData = {
    'apiLink': 'http://localhost:8080/api/',
    'examVariant': 2,
    'regExp': /^[a-zA-Z0-9]{32}$/,
    webLink: (login, pass) => `http://${login}:${pass}@localhost:8080/web/`,
    'login': 'login',
    'password': 'password',
    'footerVersion': 'Version: 2',
    'nexageProjectId': 1,
    'randomStringLength': 7,
    'secondTabInArray': 1,
    'firstTabInArray': 0,
    'elementIsDisplaying': true,
    'nexageProjectName': 'Nexage',
    projectSavedInscription: (projectName) => `Project ${projectName} saved`,
    'nameToken': 'token',
    testName: (randomId) => `BKV-${randomId}: kirill_b_test_name_example`,
    'methodName': 'kirill_b_method_name_example',
    'randomShortStringLength': 3,
    'pathToLogs': './logs/logs.log',
    'trueDescending': true,
    'firstSymbol': 0,
    'lastSymbol': 20
};

module.exports = {testData};