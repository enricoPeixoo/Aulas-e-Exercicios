let citys = ""
let travelTimes = 0
const name = prompt("Escreva o seu nome: ")

 let answer = prompt("Já visitou alguma cidade? Sim/Não")

 while (answer === "Sim") {
  let city = prompt("Qual o nome da cidade visitada?")
  citys += " - " + city + "\n"
  travelTimes++
  answer = prompt("Você visitou alguma outra cidade? Sim/Não")
 }


alert("O turista " + name + " viajou " +travelTimes+" vezes!\n Cidades: \n" +citys)
