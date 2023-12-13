let money = 0
let option = ""
let addMoney = 0
let removeMoney = 0

money = parseFloat(prompt("Quantidade inicial de saldo: ")) 

do{
  option = prompt("Saldo disponível: " + money +"\n\n1- Adicionar\n2- Remover\n3- Sair")

  switch (option) {
    case "1":
      addMoney = parseFloat(prompt("Informe a quantia que deseja adicionar: "))
      money += addMoney
      break
    case "2":
      removeMoney = parseFloat(prompt("Informe a quantia que deseja remover: "))
      money -= removeMoney
      break
  }
} while (option !== "3") {
  alert("Programa foi encerrado!")
}