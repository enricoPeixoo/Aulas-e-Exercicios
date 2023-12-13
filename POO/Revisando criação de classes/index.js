const User = require("./User.js");
const Product = require("./Product.js")

const enrico = new User("enrico", "enrico@gmail.com", "123")
const sorvete = new Product("Sorvete", "É gelado!", 10)

enrico.login("enrico@gmail.com", "123")

sorvete.addToStock(50)
const precoSorveteDesconto = sorvete.calculateDiscount(50)

console.log(precoSorveteDesconto)








