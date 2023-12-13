class Property {
  constructor(area, price) {
    this.area = area
    this.price = price
  }

  getPricePerSquareMeter() {
    return this.price / this.area
  }
}

class House extends Property {

}

class Apartment extends Property {
  constructor(number, area, price) {
    super(area, price)
    this.number = number
  }

  getFloor() {
    return this.number.slice(0, -2)
  }
}

const land = new Property(500, 50000)
const someHouse = new House(200, 30000)
const apt = new Apartment("202", 300, 300000)

console.log(land)
console.log(someHouse)
console.log(apt)
console.log(apt.getFloor())



