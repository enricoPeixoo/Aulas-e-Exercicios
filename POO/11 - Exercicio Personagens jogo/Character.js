class Character {
  constructor(name, lifePoints, attackPoints, defensePoints) {
    this.name = name
    this.lifePoints = lifePoints
    this.attackPoints = attackPoints
    this.defensePoints = defensePoints
  }

  attack(enemy) {
    enemy.lifePoints -= this.attackPoints - enemy.defensePoints
  }
}

module.exports = Character