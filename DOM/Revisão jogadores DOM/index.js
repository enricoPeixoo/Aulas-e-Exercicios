function addPlayer() {
  const playerPosition = document.getElementById('position').value
  const playerName = document.getElementById('name').value
  const playerNumber = document.getElementById('number').value

  const confirmation = confirm("Deseja escalar o " + playerPosition + " " + playerName + "(" + playerNumber + ")")

  if (confirmation) {
    const teamList = document.getElementById('players-list')
    const player = document.createElement('li')

    player.id = 'player-' + playerNumber
    player.innerText = playerPosition + ": " + playerName + "(" + playerNumber + ")"
    teamList.appendChild(player)

    document.getElementById('position').value = ''
    document.getElementById('name').value = ''
    document.getElementById('number').value = ''
  }
}

function removePlayer() {
  const numberToRemove = document.getElementById('removeNumber').value
  const playerToRemove = document.getElementById('player-' + numberToRemove)

  const confirmation = confirm(`Deseja remover o ${playerToRemove.innerText} do time?`)

  if (confirmation) {
    document.getElementById('players-list').removeChild(playerToRemove)
    document.getElementById('removeNumber').value = ''
  }
}