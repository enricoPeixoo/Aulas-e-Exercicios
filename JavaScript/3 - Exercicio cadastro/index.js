let nome
let sobrenome
let campo
let anoNascimento

 nome = window.prompt("Insira o nome do recruta:")
 sobrenome = window.prompt("Insira o sobrenome do recruta:")
 campo = window.prompt("Insira o campo de estudo do recruta:")
 anoNascimento = 2023 - window.prompt("Insira o ano de nascimento:")

 window.alert("Recruta cadastrado com sucesso!\n\n" +
             "Nome: " + nome + " " + sobrenome + "\n"
             + "Campo de estudo: " + campo + "\n" 
             + "Idade: " + anoNascimento)
