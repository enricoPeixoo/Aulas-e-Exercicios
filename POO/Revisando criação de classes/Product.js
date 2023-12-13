class Product {
  constructor(name, description, price) {
    this.name = name
    this.description = description
    this.price = price
    this.inStock = 0
  }

  addToStock(quantity) {
    this.inStock += quantity
  }

  calculateDiscount(discount) {
    return this.price * ((100 - discount) / 100)

  }
}

module.exports = Product