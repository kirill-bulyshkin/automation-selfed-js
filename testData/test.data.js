const testData = {
    'link': 'https://jsonplaceholder.typicode.com',
    'jsonFormat': 'application/json',
    'ascendingById': 'id',
    'post99': 99,
    'userId10': 10,
    'post99Id': 99,
    'unexistPostValue': 150,
    'userId5': 5,
    'minUserId': 101,
    'maxUserId': 199,
    'bodyLength': 10,
    'titleLength': 5
};

const user5 = {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
        "street": "Skiles Walks",
        "suite": "Suite 351",
        "city": "Roscoeview",
        "zipcode": "33263",
        "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
        }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
        "name": "Keebler LLC",
        "catchPhrase": "User-centric fault-tolerant solution",
        "bs": "revolutionize end-to-end systems"
    }
};

const statusCodes = {
    'ok': 200,
    'created': 201,
    'notFound': 404
}

module.exports = {testData, user5, statusCodes};