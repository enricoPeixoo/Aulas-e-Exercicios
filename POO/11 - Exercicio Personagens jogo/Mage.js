const Character = require("./Character");

class Mage extends Character {
  constructor(name, lifePoints, attackPoints, defensePoints, magicPoints) {
    super(name, lifePoints, attackPoints, defensePoints)
    this.magicPoints = magicPoints
  }

  attack(enemy) {
    enemy.lifePoints -= (this.attackPoints + this.magicPoints) - enemy.defensePoints
  }

  heal(targetHeal) {
    targetHeal.lifePoints += this.magicPoints * 2
  }
}

module.exports = Mage