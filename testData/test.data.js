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
    'nexageProjectName': 'Nexage'
};

module.exports = {testData};