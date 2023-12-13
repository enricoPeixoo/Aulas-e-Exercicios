const Post = require("./Post")

class Author {
    constructor(name) {
        this.name = name
        this.posts = []
    }

    writePost(title, body) {
        const newPost = new Post(title, body, this)
        this.posts.push(newPost)
        return newPost
    }
}

module.exports = Author