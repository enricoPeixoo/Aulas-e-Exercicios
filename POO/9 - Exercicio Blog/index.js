const Author = require("./Author.js")
const Comment = require("./Comment.js")
const Post = require("./Comment.js")

const enrico = new Author("Enrico Falcão")

const post = enrico.writePost("Como criar um Post!", "Basta voce clicar em criar um post :D")

post.addComment("Leleco", "Vlw irmão, ajudou demais.")
post.addComment("Luba", "De lenhar mano")

console.log(enrico)
console.log(post)