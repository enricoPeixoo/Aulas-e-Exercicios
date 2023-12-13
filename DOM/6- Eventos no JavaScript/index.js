function register (ev) { // O evento que sera usado no addEventListener
  console.log(ev)
  const username = ev.currentTarget.parentNode.children.username.value
  const password = ev.currentTarget.parentNode.children.password.value
  const passwordConfirmation = ev.currentTarget.parentNode.children.passwordConfirmation.value

  if (password === passwordConfirmation) {
    alert ("confirmado!" +username)
  } else {
    alert("Senhas nao conferem")
  }
}

const button = document.getElementById('register-button')

button.addEventListener('click', register) 

function removeListener () {
  button.removeEventListener('click', register) // remove um evento do HTML
  alert("Evento Removido!")
}



//No HTML o "defer" apos o comando de script para colocar o JS,da um atraso para conseguir add o evento