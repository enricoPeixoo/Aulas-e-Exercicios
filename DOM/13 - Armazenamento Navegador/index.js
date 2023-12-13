document.getElementById('sessionBtn').addEventListener('click', function () {
  const input = document.getElementById('session')
  sessionStorage.setItem('info', input.value)
  input.value = ''
})

document.getElementById('readSession').addEventListener('click', function () {
  const info = sessionStorage.getItem('info')
  alert("A informação é: " + info)
})

document.getElementById('localBtn').addEventListener('click', function () {
  const input = document.getElementById('local')
  localStorage.setItem('text', input.value)
  input.value = ''
})

document.getElementById('readLocal').addEventListener('click', function () {
  const t = localStorage.getItem('text')
  alert("A informação é: " + t)
})

document.getElementById('cookieBtn').addEventListener('click', function () {
  const input = document.getElementById('cookie')
  // nome do cookie=value; expires=UTCStringDate; path=/
  const cookie = 'info=' + input.value + ';'
  const expiration = 'expires=' + new Date(2023,4,18) + ';'
  const path = 'path=/;'
  document.cookie = cookie + expiration + path
  input.value = ''
})