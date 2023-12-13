function calcular(a,b,operacao) {
  console.log("Realizando uma operação.")
  const resultado = operacao(a,b) //somar(3, 5)
  return resultado
}

function somar(x,y) {
  console.log("Realizando uma soma.")
  return x + y
}

calcular(3,5,somar)

function exibirElemento(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array
  })
}

const lista = ["Maçã","Banana","Laranja", "Limão"]

for(let i = 0; i < lista.length;i++) {
  exibirElemento(lista[i], i, lista)
}

lista.forEach(exibirElemento) //Chama uma funcao para cada item do array (igual ao for)

