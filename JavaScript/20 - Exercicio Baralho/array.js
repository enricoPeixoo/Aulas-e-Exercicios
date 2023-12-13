let option = ""
let cards = ["3 de paus","ás de espadas"]
let addCard = ""

do {
   option = prompt("MENU\n\nCartas do baralho: " + cards.length + "\n1- Adicionar uma carta\n2- Puxar uma carta\n3- Sair")

   switch(option) {
    case "1":
       addCard = prompt("Digite o nome da carta para ser adicionada ao topo do baralho: ")
       cards.unshift(addCard)
       break
    case "2":
      alert("Carta puxada do baralho: " +cards[0])
      cards.shift()
      break
   }

} while(option !== 3){
  alert("O programa foi encerrado!")
}