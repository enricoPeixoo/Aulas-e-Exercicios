const spaceships = []
let option:number 


do {
  option = Number(prompt(`1- Criar uma nave
2- Adicionar tripulação em uma nave
3- Enviar uma nave para missão
4- Listar naves registradas
5- Sair do programa`))


  switch (option) {
    case 1:
      const spaceshipName = prompt ("Insira o nome da nave: ")
      const spaceshipPilot = prompt ("Insira o nome do piloto da nave: ")
      const spaceshipCrewLimit = Number(prompt ("Insira o limite máximo da tripulação da nave: "))
  
      createSpaceship(spaceshipName, spaceshipPilot, spaceshipCrewLimit)
    break

   case 2:
      const searchSpaceship = prompt ("Insira o nome da nave em que deseja adicionar a tripulação: ")
      const crewName = prompt("Insira o nome do novo tripulante: ")

      addCrewToSpaceship(searchSpaceship, crewName)
      break
  
    case 3:
      const sendSpaceship = prompt("Insira o nome da nave que deseja enviar para uma missão: ")

      sendSpaceshipToMission(sendSpaceship)
      break

    case 4:
      listSpaceships()
      break
}
} while (option !== 5) {
  alert("Programa foi encerrado")
}


function createSpaceship (name:string, pilot:string, crewLimit:number) {
  const spaceship = {
    name,
    pilot,
    crewLimit,
    crew: [],
    inMission: false
  }
  spaceships.push(spaceship)
}

function addCrewToSpaceship (spaceship:string, member:string) {
  spaceships.forEach(obj => {
    if(obj.name === spaceship) {
      if (obj.crew.length < obj.crewLimit) {
        obj.crew.push(member)
        alert(`O novo membro ${member} foi adicionado à nave ${spaceship}`)
      } else {
        alert(`A nave ${spaceship} já possui o número máximo de tripulantes`)
      }
    }
  })
}

function sendSpaceshipToMission (spaceship:string) {
  spaceships.forEach(obj => {
    if(obj.name === spaceship) {
      if(obj.crew.length >= Math.floor((obj.crewLimit / 3)) && obj.inMission === false) {
        alert(`A nave ${obj.name} foi enviada para a missão com sucesso!`)
        obj.inMission = true 
      } else if (obj.crew.length >= Math.floor((obj.crewLimit / 3)) && obj.inMission === true) {
        alert(`A nave ${obj.name} já está em missão!`)
      } else {
        alert (`A nave ${obj.name} não possui o número minimo de integrantes para a missão!`)
      }
    }
  })
}

function listSpaceships () {
  spaceships.forEach((obj, index) => {
    alert(`Nave ${index + 1}:
Nome: ${obj.name}
Piloto: ${obj.pilot}
Limite de tripulantes: ${obj.crewLimit}
Tripulantes: ${obj.crew}
Em missão: ${obj.inMission}`)
  })
}











