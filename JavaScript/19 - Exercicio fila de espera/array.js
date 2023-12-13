let option = ""
let patient = ["Matheus", "Marcos"]
let nome= ""

do {
  option = prompt("MENU\n\nPacientes: " + patient + "\n\n1- Novo Paciente\n2- Consultar paciente\n3- Sair")
  
  switch(option){
    case "1":
      nome = prompt("Digite o nome do paciente a ser adicionado: ")
      patient.push(nome)
      break
    case "2":
      alert("Paciente Consultado: "+ patient[0])
      patient.shift()
      break
  }
} while (option != "3") {
  alert("O programa foi encerrado!")
}