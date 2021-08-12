const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-sorted'));

const {testData, user5} = require('../testData/test.data');
const {randomStr, getRandomIntInclusive} = require('../framework/utils/randomGenerator');
const axios = require('axios');

describe('Testing of REST API', async () => {
    let userToCompare;

    it('List of the posts returned in JSON and sorting ascending id', async () => {
        await axios.get(`${testData.link}/posts`).then(res => {
            expect(res.status).to.eql(200);
            expect(JSON.stringify(res.headers)).to.include("application/json");
            expect(res.data).to.be.ascendingBy('id')
        });
    });

    it('Getting post #99', async () => {
        await axios.get(`${testData.link}/posts/99`).then(res => {
            expect(res.status).to.eql(200);
            expect(res.data.userId).to.eql(10);
            expect(res.data.id).to.eql(99);
            expect(res.data.title).to.be.not.empty;
            expect(res.data.body).to.be.not.empty;
        });
    });

    it('Getting unexisting post #150', async () => {
        await axios.get(`${testData.link}/posts/150`, {validateStatus: false}).then(res => {
            expect(res.status).to.eql(404);
            expect(res.data).to.be.empty;
        });
    });

    it('Post creating', async () => {
        const randomBody = `${randomStr(10)}_test_body`;
        const randomTitle = `${randomStr(5)}_test_title`;
        const randomUserId = getRandomIntInclusive(101, 199);
        await axios.post(`${testData.link}/posts`, {
            "body": randomBody,
            "title": randomTitle,
            "userId": randomUserId
        })
        .then(res => {
            expect(res.status).to.eql(201);
            expect(res.data.body).to.eql(randomBody);
            expect(res.data.title).to.eql(randomTitle);
            expect(res.data.userId).to.eql(randomUserId);
        });
    });

    it('Getting users', async () => {
        await axios.get(`${testData.link}/users`).then(res => {
            expect(res.status).to.eql(200);
            expect(JSON.stringify(res.headers)).to.include("application/json");
            const userIndex = res.data.findIndex(u => u.id === 5);
            expect(res.data[userIndex]).to.eql(user5);
            userToCompare = res.data[userIndex];
        });
    });

    it('Getting user 5', async () => {
        await axios.get(`${testData.link}/users/5`).then(res => {
            expect(res.status).to.eql(200);
            expect(res.data).to.eql(userToCompare);
        });
    });
});




