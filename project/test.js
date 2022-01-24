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
        const testsList = await TDApiUtils.getTestsListInJson(testData.nexageProjectId);
        const testsNames = [];
        _.each(testsList, name => testsNames.push(name.name));
        // console.log(testsNames);
        
        // const startTimes = [];
        // _.each(testsList, startTime => startTimes.push(startTime.startTime));
        // console.log(startTimes);

        const nexageProjectPage = new NexageProjectPage();
        await nexageProjectPage.waitingStartTimesFields();

        const startTimes = await nexageProjectPage.getStartTimes();
        expect(startTimes).to.be.sorted({descending: true});




       
});
