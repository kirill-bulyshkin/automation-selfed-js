const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-sorted'));
const JsonplaceholderApi = require('../framework/utils/jsonplaceholderApi');
const {testData, user5, statusCodes} = require('../testData/test.data');
const {randomStr, getRandomIntInclusive} = require('../framework/utils/randomGenerator');


describe('Testing of REST API', async () => {
    let userToCompare;
    let jsonplaceholderApi = new JsonplaceholderApi(testData.link);

    it('List of the posts returned in JSON and sorting ascending id', async () => {
        await jsonplaceholderApi.getPosts().then(res => {
            expect(res.status).to.eql(statusCodes.ok);
            expect(JSON.stringify(res.headers)).to.include(testData.jsonFormat);
            expect(res.data).to.be.ascendingBy(testData.ascendingById)
        });
    });

    it('Getting post #99', async () => {
        await jsonplaceholderApi.getPost(testData.post99).then(res => {
            expect(res.status).to.eql(statusCodes.ok);
            expect(res.data.userId).to.eql(testData.userId10);
            expect(res.data.id).to.eql(testData.post99Id);
            expect(res.data.title).to.be.not.empty;
            expect(res.data.body).to.be.not.empty;
        });
    });

    it('Getting unexisting post #150', async () => {
        await jsonplaceholderApi.getUnexistPost(testData.unexistPostValue).then(res => {
            expect(res.status).to.eql(statusCodes.notFound);
            expect(res.data).to.be.empty;
        });
    });

    it('Post creating', async () => {
        const randomBody = `${randomStr(10)}_test_body`;
        const randomTitle = `${randomStr(5)}_test_title`;
        const randomUserId = getRandomIntInclusive(101, 199);
        await jsonplaceholderApi.createPost(randomBody, randomTitle, randomUserId)
        .then(res => {
            expect(res.status).to.eql(statusCodes.created);
            expect(res.data.body).to.eql(randomBody);
            expect(res.data.title).to.eql(randomTitle);
            expect(res.data.userId).to.eql(randomUserId);
        });
    });

    it('Getting users', async () => {
        await jsonplaceholderApi.getUsers().then(res => {
            expect(res.status).to.eql(statusCodes.ok);
            expect(JSON.stringify(res.headers)).to.include(testData.jsonFormat);
            const user5Index = res.data.findIndex(u => u.id === testData.userId5);
            expect(res.data[user5Index]).to.eql(user5);
            userToCompare = res.data[user5Index];
        });
    });

    it('Getting user 5', async () => {
        await jsonplaceholderApi.getUser(testData.userId5).then(res => {
            expect(res.status).to.eql(statusCodes.ok);
            expect(res.data).to.eql(userToCompare);
        });
    });
});




