const number = prompt("Escreva um valor em metros para ser convertido: ")
let option = prompt("Escolha uma unidade de medida para o valor ser convertido: \n\n" +
                    "1- Milímetro\n 2- Centímetro\n 3- Decímetro\n 4- Decâmetro\n 5- Hectômetro\n 6- Quilômetro")

switch(option) {
  case "1":
  alert("Convertido para Milímetro: " + number*1000 + " mm")
  break
  case "2":
    alert("Convertido para Centímetro: " + number*100 + " cm")
    break
  case "3":
  alert("Convertido para Decímetro: " + number*10 + " dm")
  break
  case "4":
    alert("Convertido para Decâmetro: " + number/10 + " dam")
    break
  case "5":
  alert("Convertido para Hectômetro: " + number/100 + " hm")
  break
  case "6":
    alert("Convertido para Quilômetro: " + number/1000 + " km")
    break
  default:
    alert("Opção Inválida!")
}