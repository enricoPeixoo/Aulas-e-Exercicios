const Database = require("./Database")
const Author = require("./entities/Author")
const Book = require("./entities/Book")
const User = require("./entities/User")
const Poster = require("./entities/Poster")
const Order = require("./entities/Order")

class App {
  static #database = new Database()

  createUser(name, email, password) {
    const User = new User(name, email, password)
    App.#database.saveUser(user)
  }

  getUsers() {
    App.#database.find('users')
  }

  createAuthor(name, nacionality, bio) {
    const author = new Author(name, nacionality, bio) 
      App.#database.saveAuthor(author)
  }

  getAuthors() {
    return App.#database.find('authors')
  }

  createBook(title, synopsis, genre, pages, author, description, price, inStock) {
    const book = new Book (title, synopsis, genre, pages, author, description, price, inStock)
    App.#database.saveBook(book)
  }

  addBook(bookName, quantity) {
    App.#database.addBooksToStock(bookName, quantity)
  }

  getBooks() {
    return App.#database.find('books')
  }

  createPoster(name, description, height, width, price, inStock) {
    const poster = new Poster(name, description, height, width, price, inStock)
    App.#database.savePoster(poster)
  }

  addPoster(posterName, quantity) {
    App.#database.addPostersToStock(posterName, quantity)
  }

  getPoster() {
    return App.#database.find('posters')
  }

  createOrders(items, user) {
    const order = new Order(items, user)
    App.#database.saveOder(order)
    order.data.forEach(({product, quantity}) => {
      if(product instanceof Book) {
        App.#database.removeBooksFromStock(product.name, quantity)
      } else if (product instanceof Poster) {
        App.#database.removePostersFromStock(product.name, quantity)
      }
    })
  }

  getOrders() {
    return App.#database.find('orders')
  }

  showDatabase() {
    App.#database.showStorage()
  }

}

module.exports = App