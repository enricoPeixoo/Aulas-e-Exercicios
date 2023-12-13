function calcularMedia(a,b) {
  const media = (a+b) / 2
  return media
}

const resultado = calcularMedia(7, 2)

function criarProduto(nome,preco) {
  const produto = {
    nome: nome,
    preco: preco,
    estoque: 1
  }
  return produto
}

const notebook = criarProduto("Notebook", 2500)

console.log(notebook)

