const {expect} = require('chai');
const {testData} = require('../testData/test.data');
const TDApiUtils = require('../framework/utils/tdApiUtils');
const Browser = require('../framework/browser/browser');
const ProjectsPage = require('./pages/projectsPage');


it('Test variant 2', async () => {
        const token = await TDApiUtils.getToken();
        expect(token).to.match(testData.regExp);

        await Browser.navigate(testData.webLink(testData.login, testData.password));
        await Browser.windowMaximize();
        const projectsPage = new ProjectsPage();
        await projectsPage.projectsPageIsDisplayed();
        await Browser.addCookie('token', token);
        await Browser.refreshPage();
        expect(await projectsPage.getFooterVersionText()).to.eql(testData.footerVersion);
});
