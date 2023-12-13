var spaceships = [];
var option;
do {
    option = Number(prompt("1- Criar uma nave\n2- Adicionar tripula\u00E7\u00E3o em uma nave\n3- Enviar uma nave para miss\u00E3o\n4- Listar naves registradas\n5- Sair do programa"));
    switch (option) {
        case 1:
            var spaceshipName = prompt("Insira o nome da nave: ");
            var spaceshipPilot = prompt("Insira o nome do piloto da nave: ");
            var spaceshipCrewLimit = Number(prompt("Insira o limite máximo da tripulação da nave: "));
            createSpaceship(spaceshipName, spaceshipPilot, spaceshipCrewLimit);
            break;
        case 2:
            var searchSpaceship = prompt("Insira o nome da nave em que deseja adicionar a tripulação: ");
            var crewName = prompt("Insira o nome do novo tripulante: ");
            addCrewToSpaceship(searchSpaceship, crewName);
            break;
        case 3:
            var sendSpaceship = prompt("Insira o nome da nave que deseja enviar para uma missão: ");
            sendSpaceshipToMission(sendSpaceship);
            break;
        case 4:
            listSpaceships();
            break;
    }
} while (option !== 5);
{
    alert("Programa foi encerrado");
}
function createSpaceship(name, pilot, crewLimit) {
    var spaceship = {
        name: name,
        pilot: pilot,
        crewLimit: crewLimit,
        crew: [],
        inMission: false
    };
    spaceships.push(spaceship);
}
function addCrewToSpaceship(spaceship, member) {
    spaceships.forEach(function (obj) {
        if (obj.name === spaceship) {
            if (obj.crew.length < obj.crewLimit) {
                obj.crew.push(member);
                alert("O novo membro ".concat(member, " foi adicionado \u00E0 nave ").concat(spaceship));
            }
            else {
                alert("A nave ".concat(spaceship, " j\u00E1 possui o n\u00FAmero m\u00E1ximo de tripulantes"));
            }
        }
    });
}
function sendSpaceshipToMission(spaceship) {
    spaceships.forEach(function (obj) {
        if (obj.name === spaceship) {
            if (obj.crew.length >= Math.floor((obj.crewLimit / 3)) && obj.inMission === false) {
                alert("A nave ".concat(obj.name, " foi enviada para a miss\u00E3o com sucesso!"));
                obj.inMission = true;
            }
            else if (obj.crew.length >= Math.floor((obj.crewLimit / 3)) && obj.inMission === true) {
                alert("A nave ".concat(obj.name, " j\u00E1 est\u00E1 em miss\u00E3o!"));
            }
            else {
                alert("A nave ".concat(obj.name, " n\u00E3o possui o n\u00FAmero minimo de integrantes para a miss\u00E3o!"));
            }
        }
    });
}
function listSpaceships() {
    spaceships.forEach(function (obj, index) {
        alert("Nave ".concat(index + 1, ":\nNome: ").concat(obj.name, "\nPiloto: ").concat(obj.pilot, "\nLimite de tripulantes: ").concat(obj.crewLimit, "\nTripulantes: ").concat(obj.crew, "\nEm miss\u00E3o: ").concat(obj.inMission));
    });
}
