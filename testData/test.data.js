const testData = {
    'apiLink': 'http://localhost:8080/api/',
    'examVariant': 2,
    'regExp': /^[a-zA-Z0-9]{32}$/,
    webLink: (login, pass) => `http://${login}:${pass}@localhost:8080/web/`,
    'login': 'login',
    'password': 'password',
    'footerVersion': 'Version: 2'
};

module.exports = {testData};