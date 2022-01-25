const {expect} = require('chai');
const {testData} = require('../testData/test.data');
const TDApiUtils = require('../framework/utils/tdApiUtils');
const Browser = require('../framework/browser/browser');
const ProjectsPage = require('./pages/projectsPage');
const _ = require('lodash');
const NexageProjectPage = require('./pages/nexageProjectPage');


const chaiSorted = require('chai-sorted');
const chai = require("chai");
chai.use(chaiSorted);


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

        await projectsPage.clickNexageProjectLink();
        const nexageProjectPage = new NexageProjectPage();
        await nexageProjectPage.waitingStartTimesFields();
        expect(await nexageProjectPage.getStartTimesFromUi()).to.be.sorted({descending: true});
        const testsNamesFromUi = await nexageProjectPage.getTestsNamesFromUi();
        const testsListFromApi = await TDApiUtils.getTestsListInJson(testData.nexageProjectId);
        let testsNamesFromApi = [];
        _.each(testsListFromApi, name => testsNamesFromApi.push(name.name));
        expect(testsNamesFromApi).to.include.members(testsNamesFromUi);

 
});
