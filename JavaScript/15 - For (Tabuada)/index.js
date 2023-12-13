let number = prompt("Escreva um numero: ")
let total = ""


for(i = 1; i <= 20; i++) {
  let multiplicacao = (number * i)
  alert(multiplicacao)
  total += multiplicacao + ", "
}

alert("Os valores são: " + total)

