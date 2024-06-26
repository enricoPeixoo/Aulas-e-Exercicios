const Comments = require("./Comment")

class Post {
    constructor(title, body, author) {
        this.title = title
        this.body = body
        this.author = author
        this.comments = []
        this.createdAt = new Date()
    }
    addComment(username, content) {
        this.comments.push(new Comments(username, content))
    }
}

module.exports = Post