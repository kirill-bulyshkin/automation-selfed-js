const chai = require("chai");
const chaiSorted = require('chai-sorted');
chai.use(chaiSorted);
const {expect} = require('chai');
const {testData} = require('../testData/test.data');
const TDApiUtils = require('../framework/utils/tdApiUtils');
const Browser = require('../framework/browser/browser');
const ProjectsPage = require('./pages/projectsPage');
const _ = require('lodash');
const NexageProjectPage = require('./pages/nexageProjectPage');
const RandomGenerators = require('../framework/utils/randomGenerator');
const AddProjectPage = require('../project/pages/addProjectPage');


it('Test variant 2', async () => {
        const token = await TDApiUtils.getToken();
        expect(token).to.match(testData.regExp);

        await Browser.navigate(testData.webLink(testData.login, testData.password));
        await Browser.windowMaximize();
        const projectsPage = new ProjectsPage();
        expect(await projectsPage.projectsPageIsDisplayed()).to.be.true;
        await Browser.addCookie('token', token);
        await Browser.refreshPage();
        expect(await projectsPage.getFooterVersionText()).to.eql(testData.footerVersion);

        await projectsPage.clickProjectLink(testData.nexageProjectName);
        const nexageProjectPage = new NexageProjectPage();
        await nexageProjectPage.waitingStartTimesFields();
        expect(await nexageProjectPage.getStartTimesFromUi()).to.be.sorted({descending: true});
        const testsNamesFromUi = await nexageProjectPage.getTestsNamesFromUi();
        const testsListFromApi = await TDApiUtils.getTestsListInJson(testData.nexageProjectId);
        let testsNamesFromApi = [];
        _.each(testsListFromApi, name => testsNamesFromApi.push(name.name));
        expect(testsNamesFromApi).to.include.members(testsNamesFromUi);

        await Browser.backToPreviousPage();
        await projectsPage.clickAddProjectButton();
        const addProjectPage = new AddProjectPage();
        const secondTabId = (await Browser.getAllWindowsHandles())[testData.secondTabInArray];
        await Browser.switchToAnotherTab(secondTabId);
        const randomProjectName = RandomGenerators.randomStr(testData.randomStringLength);
        await addProjectPage.setProjectNameValue(randomProjectName);
        await addProjectPage.saveProjectButtonClick();
        expect(await addProjectPage._getSuccessProjectSavingText()).to.eql(`Project ${randomProjectName} saved`);
        await Browser.closeCurrentTab();
        expect(await Browser.getAllWindowsHandles()).to.not.include(secondTabId);
        const firstTabId = (await Browser.getAllWindowsHandles())[testData.firstTabInArray];
        await Browser.switchToAnotherTab(firstTabId);
        await Browser.refreshPage();
        expect(await projectsPage.projectByNameIsDisplaying(randomProjectName)).to.eql(testData.elementIsDisplaying);
});
