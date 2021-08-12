const axios = require('axios');

class JsonplaceholderApi {

    constructor(link) {
        this.link = link;
    }

    async getPosts() {
        return axios.get(`${this.link}/posts`)
    }

    async getPost(post) {
        return axios.get(`${this.link}/posts/${post}`)
    }

    async getUnexistPost(post) {
        return axios.get(`${this.link}/posts/${post}`, {validateStatus: false})
    }

    async createPost(body, title, userId) {     
        return axios.post(`${this.link}/posts`, {
            "body": body,
            "title": title,
            "userId": userId
        })
    }

    async getUsers() {
        return axios.get(`${this.link}/users`)
    }

    async getUser(user) {
        return axios.get(`${this.link}/users/${user}`)
    }
}

module.exports = JsonplaceholderApi;