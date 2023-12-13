const Character = require("./Character");

class Thief extends Character {
  attack(enemy) {
    enemy.lifePoints -= 2 * (this.attackPoints - enemy.defensePoints)
  }
}

module.exports = Thief