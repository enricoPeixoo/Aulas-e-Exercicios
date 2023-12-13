const Character = require("./Character");

class Warrior extends Character {
  constructor(name, lifePoints, attackPoints, defensePoints, shieldPoints) {
    super(name, lifePoints, attackPoints, defensePoints)
    this.shieldPoints = shieldPoints
    this.position = 'attacking'
  }

  attack(enemy) {
    if(this.position === 'attacking') {
      enemy.lifePoints -= this.attackPoints - enemy.defensePoints
    }  
  }

  switchPositon () {
    if(this.position === 'attacking') {
      this.position = 'defending'
      this.defensePoints += this.shieldPoints
    } else {
      this.position = 'attacking'
      this.defensePoints -= this.shieldPoints
    }
  }
}

module.exports = Warrior