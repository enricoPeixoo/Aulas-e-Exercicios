let pacientList = ["Ph", "Leo"]
let options = ""
let newPacient = ""
let pacient = ""

do {
  options = prompt(`Pacientes em espera: ${pacientList}
  - Digite 1 para adicionar um novo paciente
  - Digite 2 para consultar paciente
  - Digite 3 para sair`)

  switch (options) {
    case "1":
      newPacient = prompt("Qual o nome do paciente?")
      pacientList.push(newPacient)
      alert(newPacient + " foi adicionado na lista de espera")
      break
    case "2":
      pacient = prompt("Qual o nome do paciente que deseja consultar?")
      for (let i = 0; i <= pacientList.length; i++) {
        let searchPacient = pacientList[i]
        if (searchPacient == pacient) {
          alert(pacient + " se encontra na posição " + (i + 1))
        }
      }
      break
  }

} while (options !== "3") {
  alert("Programa Encerrado")
}