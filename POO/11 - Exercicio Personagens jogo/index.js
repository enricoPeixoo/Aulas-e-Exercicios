const Character = require("./Character");
const Mage = require("./Mage");
const Thief = require("./Thief");
const Warrior = require("./Warrior");

const alfred = new Character('Alfred', 50, 40, 15)
const pedrin = new Thief('Pedrin', 50, 20, 20)
const paulo = new Mage ('Paulo', 50, 30, 20, 20)
const cesao = new Warrior('Cesao', 80, 20, 30, 20)


console.table({alfred, pedrin, paulo, cesao})
paulo.attack(alfred)

console.table({alfred, pedrin, paulo, cesao})

paulo.heal(alfred)
console.table({alfred, pedrin, paulo, cesao})



