let escolha = " "

do {
  escolha = prompt("Escolha uma opção: \n\n 1- Opção 1\n 2- Opção 2\n 3- Opção 3\n 4- Opção 4\n 5- Encerrar")

  switch (escolha) {
    case "1":
      alert("Você escolheu a opção 1!")
      break
    case "2":
      alert("Você escolheu a opção 2!")
      break
    case "3":
      alert("Você escolheu a opção 3!")
      break
    case "4":
      alert("Você escolheu a opção 4!")
      break
  }
} while (escolha !=="5" ) {
  alert("O programa foi encerrado!")
}
