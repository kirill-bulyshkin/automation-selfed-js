const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-sorted'));

const {testData, comparedUser, comparedUserAddress, comparedUserGeo, comparedUserCompany} = require('../testData/test.data');
const {randomStr, getRandomIntInclusive} = require('../framework/utils/randomGenerator');
const axios = require('axios');


// beforeEach(async () => {
//    await Browser.init(testData.browserName);
// });

it('List of the posts returned in JSON and sorting ascending id', async () => {
    await axios.get(`${testData.link}/posts`).then(res => {
        expect(res.status).to.be.equal(200);
        expect(JSON.stringify(res.headers)).to.include("application/json");
        expect(res.data).to.be.ascendingBy('id')
    });
});

it('Getting post #99', async () => {
    await axios.get(`${testData.link}/posts/99`).then(res => {
        expect(res.status).to.be.equal(200);
        expect(res.data.userId).to.be.equal(10);
        expect(res.data.id).to.be.equal(99);
        expect(res.data.title).to.be.not.empty;
        expect(res.data.body).to.be.not.empty;
    });
});

it('Getting unexisting post #150', async () => {
    await axios.get(`${testData.link}/posts/150`, {validateStatus: false}).then(res => {
        expect(res.status).to.be.equal(404);
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
        expect(res.status).to.be.equal(201);
        expect(res.data.body).to.be.equal(randomBody);
        expect(res.data.title).to.be.equal(randomTitle);
        expect(res.data.userId).to.be.equal(randomUserId);
    });
});

it('Getting users', async () => {
    await axios.get(`${testData.link}/users`).then(res => {
        expect(res.status).to.be.equal(200);
        expect(JSON.stringify(res.headers)).to.include("application/json");
        const userIndex = res.data.findIndex(u => u.id === 5);

        expect(res.data[userIndex]).to.include(comparedUser);
        expect(res.data[userIndex].address).to.include(comparedUserAddress);
        expect(res.data[userIndex].address.geo).to.include(comparedUserGeo);
        expect(res.data[userIndex].company).to.include(comparedUserCompany);

        comparedUserFromStep5 = {
            'id': res.data[userIndex].id,
            'name': res.data[userIndex].name,
            'username': res.data[userIndex].username,
            'email': res.data[userIndex].email,
            'phone': res.data[userIndex].phone,
            'website': res.data[userIndex].website
        };

        comparedUserAddressFromStep5 = {
            'street': res.data[userIndex].address.street,
            'suite': res.data[userIndex].address.suite,
            'city': res.data[userIndex].address.city,
            'zipcode': res.data[userIndex].address.zipcode,
        };

        comparedUserGeoFromStep5 = res.data[userIndex].address.geo;
        comparedUserCompanyFromStep5 = res.data[userIndex].company;

    });
});

it('Getting user 5', async () => {
    await axios.get(`${testData.link}/users/5`).then(res => {
        expect(res.status).to.be.equal(200);

        expect(res.data).to.include(comparedUserFromStep5);
        expect(res.data.address).to.include(comparedUserAddressFromStep5);
        expect(res.data.address.geo).to.include(comparedUserGeoFromStep5);
        expect(res.data.company).to.include(comparedUserCompanyFromStep5);
    });
});

// afterEach(async () => {
//     await Browser.driver.quit();
// });






