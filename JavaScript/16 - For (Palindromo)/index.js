let word = prompt("Escreva uma palavra para verificar se a mesma é um palíndromo: ")
let letters = ""
let palindromo = ""

for(i = word.length - 1; i >= 0 ;i--) {
  let letters = word[i]
  palindromo += letters
}

if (word === palindromo) {
  alert("Essa palavra é um palíndromo!")
} else {
  alert("Essa palavra não é um palindromo!\n A palavra invertida: " +palindromo)
}

