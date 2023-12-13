const name1 = prompt("Nome do personagem atacante:")
const powerAttack = prompt("Poder de ataque:")
const name2 = prompt("Nome do personagem defensivo:")
let lifePoint = prompt("Pontos de Vida:")
const defensePower = prompt("Poder de Defesa:")
const shield = prompt("Possui escudo? Sim/Não")
let totalDamage = 0

if (powerAttack > defensePower && shield === "Não") {
  totalDamage = powerAttack - defensePower
} else if (powerAttack > defensePower && shield === "Sim") {
  totalDamage = (powerAttack - defensePower) / 2
}

lifePoint -= totalDamage

window.alert("-=-=-=-=-=-=-=-=-=-=-=-==-=-=--\n\n" + 
      "Personagem: " + name1 + "\n" +
      "Poder de Ataque: " +powerAttack +"\n" +
      "Quantidade de Dano: " + totalDamage + "\n" +
      "=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-\n\n" +
      "Personagem: " +name2 + "\n" +
      "Poder de Defesa: " + defensePower + "\n" +
      "Escudo: " +shield + "\n" +
      "Pontos de Vida: " + lifePoint)