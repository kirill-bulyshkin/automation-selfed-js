const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-sorted'));
const JsonplaceholderApi = require('../framework/utils/jsonplaceholderApi');
const {testData, user5, statusCodes} = require('../testData/test.data');
const {randomStr, getRandomIntInclusive} = require('../framework/utils/randomGenerator');
const Logger = require('../framework/utils/logger');


describe('Testing of REST API', async () => {
    let userToCompare;

    it('List of the posts returned in JSON and sorting ascending id', async () => {
        await JsonplaceholderApi.getPosts().then(res => {
            Logger.infoLog('Getting status code');
            expect(res.status).to.eql(statusCodes.ok);
            Logger.infoLog('Getting headers');
            expect(JSON.stringify(res.headers)).to.include(testData.jsonFormat);
            Logger.infoLog('Checking sort of the received data by ascending');
            expect(res.data).to.be.ascendingBy(testData.ascendingById);
        });
    });

    it('Getting post #99', async () => {
        await JsonplaceholderApi.getPost(testData.post99).then(res => {
            Logger.infoLog('Getting status code');
            expect(res.status).to.eql(statusCodes.ok);
            Logger.infoLog('Getting user ID');
            expect(res.data.userId).to.eql(testData.userId10);
            Logger.infoLog('Getting post ID');
            expect(res.data.id).to.eql(testData.post99Id);
            Logger.infoLog('Getting title');
            expect(res.data.title).to.be.not.empty;
            Logger.infoLog('Getting body');
            expect(res.data.body).to.be.not.empty;
        });
    });

    it('Getting unexisting post #150', async () => {
        await JsonplaceholderApi.getUnexistPost(testData.unexistPostValue).then(res => {
            Logger.infoLog('Getting status code');
            expect(res.status).to.eql(statusCodes.notFound);
            Logger.infoLog('Getting empty data');
            expect(res.data).to.be.empty;
        });
    });

    it('Post creating', async () => {
        const randomBody = `${randomStr(testData.bodyLength)}_test_body`;
        const randomTitle = `${randomStr(testData.titleLength)}_test_title`;
        const randomUserId = getRandomIntInclusive(testData.minUserId, testData.maxUserId);
        await JsonplaceholderApi.createPost(randomBody, randomTitle, randomUserId)
        .then(res => {
            Logger.infoLog('Getting status code');
            expect(res.status).to.eql(statusCodes.created);
            Logger.infoLog('Getting body of the created post');
            expect(res.data.body).to.eql(randomBody);
            Logger.infoLog('Getting title of the created post');
            expect(res.data.title).to.eql(randomTitle);
            Logger.infoLog('Getting user ID of the created post');
            expect(res.data.userId).to.eql(randomUserId);
        });
    });

    it('Getting users', async () => {
        await JsonplaceholderApi.getUsers().then(res => {
            Logger.infoLog('Getting status code');
            expect(res.status).to.eql(statusCodes.ok);
            Logger.infoLog('Getting headers');
            expect(JSON.stringify(res.headers)).to.include(testData.jsonFormat);
            const user5Index = res.data.findIndex(u => u.id === testData.userId5);
            Logger.infoLog('Getting user #5');
            expect(res.data[user5Index]).to.eql(user5);
            Logger.infoLog('Saving user #5');
            userToCompare = res.data[user5Index];
        });
    });

    it('Getting user 5', async () => {
        await JsonplaceholderApi.getUser(testData.userId5).then(res => {
            Logger.infoLog('Getting status code');
            expect(res.status).to.eql(statusCodes.ok);
            Logger.infoLog('User comparison');
            expect(res.data).to.eql(userToCompare);
        });
    });
});




