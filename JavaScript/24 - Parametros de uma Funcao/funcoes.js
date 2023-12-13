function dobro(x) {
  alert("O dobro de " +x + "é " + (x * 2))
}

dobro(5)

function dizerOla(nome = "mundo") {
  alert("Olá, "+ nome+ "!")
}

dizerOla("Isaac")
dizerOla()

function soma(a, b) {
  alert("O resultado da soma é " + (a+b))
}

soma(7.6)

function criarUsuario(nome, email, senha, tipo) {
  const usuario = {
    nome: nome, // => quando o msm nome da variavel, so colocar nome*
    email: email,
    senha: senha,
    tipo: tipo
  }
}

function novoUsuario (nome, tipo = "admin", email, senha)