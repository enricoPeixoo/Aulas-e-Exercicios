function addPlayer() {
  const position = document.getElementById('positionPlayer').value
  const namePlayer = document.getElementById('namePlayer').value
  const number = document.getElementById('numberPlayer').value

  const confirmation = confirm("Deseja realmente escalar esse jogador? ")

  if (confirmation) {
    const teamList = document.getElementById('team-list')
    const player = document.createElement('li')
    player.id = 'player-' + number
    player.innerText = position + ": " + namePlayer + " ( " + number + " )"
    teamList.appendChild(player)

    document.getElementById('positionPlayer').value = ''
    document.getElementById('namePlayer').value = ''
    document.getElementById('numberPlayer').value = ''
  } else {
    alert("Escalação do jogador cancelada!")
    document.getElementById('positionPlayer').value = ''
    document.getElementById('namePlayer').value = ''
    document.getElementById('numberPlayer').value = ''
  }
}

function removePlayer() {
  const number = document.getElementById('numberRemove').value
  const playerToRemove = document.getElementById('player-' + number)

  const confirmation = confirm("Deseja realmente remover o do time?")
  if (confirmation) {
    document.getElementById('team-list').removeChild(playerToRemove)
    document.getElementById('numberRemove').value = ''
    alert("Jogador retirado da escalação!")
  } else {
    document.getElementById('numberRemove').value = ''
    alert("Retirada do jogador cancelada!")
  }
}