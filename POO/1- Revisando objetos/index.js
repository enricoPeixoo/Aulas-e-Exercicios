

function Book(title, pages, tags, author) {
  this.title = title
  this.pages = pages
  this.tags = tags
  this.author = author
  this.published = false
  this.inStock = 0
  this.addOnStock = function addOnStock (quantity) {
    this.inStock += quantity
  }
  this.save = function () {
    //salva
  }
}

const author = {name: "Enrico Falcao"}
const tags = ["fantasy","adventure"]

const eragon = new Book("Eragon", 468, tags, author)

console.log(eragon)

const eldest = new Book("Eldest", 656, tags, author)

console.log(eldest)