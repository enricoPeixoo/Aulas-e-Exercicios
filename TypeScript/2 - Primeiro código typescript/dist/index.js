function sendSpaceship(name, captain) {
    var spaceship = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert("A nave ".concat(spaceship.name, " comandada pelo capit\u00E3o ").concat(spaceship.captain, " foi enviada em uma miss\u00E3o."));
    return spaceship;
}
function accelarate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert("Reduzindo a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed, "..."));
    }
    else if (spaceship.speed < targetSpeed) {
        alert("Aumentando a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed, "..."));
    }
    else {
        alert("Mantendo a velocidade do ".concat(spaceship.name, "..."));
    }
}
var spaceshipName = prompt("Insira o nome da nave: ");
var spaceshipCaptain = prompt("Insira o nome do capitão: ");
var currentShip = sendSpaceship(spaceshipName, spaceshipCaptain);
var speed = Number(prompt("Insira a velocidade para a qual deseja acelerar: "));
accelarate(speed, currentShip);
