const carName1 = prompt("Informe o nome do primeiro carro:")
const carSpeed1 = prompt("Informe a velocidade do primeiro carro:")
const carName2 = prompt("Informe o nome do segundo carro:")
const carSpeed2 = prompt("Informe a velocidade do segundo carro:")

if (carSpeed1 === carSpeed2) {
  alert("As velocidades são iguais!")
} else if (carSpeed1 > carSpeed2) {
  alert("O carro " + carName1 + " é mais rápido!" )
} else {
  alert("O carro " + carName2 + " é mais rápido!")
}