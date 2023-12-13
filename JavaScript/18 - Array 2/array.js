const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]

//Adicionar Elementos
//Push (coloca no final do array)
arr.push("Boromir")

// unshift (coloca no inicio do array)
arr.unshift("Steve")

//Remover elementos
//pop (remove o ultimo elemento)
arr.pop()

//shift (remove o primeiro elemento)
arr.shift()

//Pesquisar por um elemento
//includes (pesquisa se o elemento existe (true ou false))
arr.includes("Pippin")

//indexOf (pesquisa se existe e devolve a sua posicao)
arr.indexOf("Merry")

//Cortar e Concatenar
//slice
const hobbit = arr.slice(0, 4)

//concat
const sociedade = hobbit.concat(hobbit, "Boromir")

//Substituicao dos Elementos
//splice
const a = sociedade.splice(4, 1, "Gandalf, O cinzento")

// Iterar sobre os elementos
for(let i = 0; i <= sociedade.length;i++){
  const elemento = sociedade[i]
}