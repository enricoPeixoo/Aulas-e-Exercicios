let option
const vaga = {}
const vagas = []
const candidato = {}



do {
  option = prompt("MENU\n\n1- Criar nova vaga\n2- Listar vagas disponíveis\n3- Visualizar vaga\n4- Inscrever candidato em uma vaga\n5- Excluir uma vaga\n6- Sair")

  switch(option) {
    case "1":
      vaga.nome = prompt("Digite um nome para a vaga: ")
      vaga.descricao = prompt("Digite uma descrição para a vaga: ")
      vaga.dataLimite = prompt("Digite a data limite da vaga: ")

      let confirm = prompt("Nome: "+vaga.nome+"\n"+"Descrição: "+vaga.descricao+"\n"+"Data limite: "+vaga.dataLimite+"\n\nDeseja salvar essa vaga? (Sim/Não)")
      if (confirm === "Sim") {
        vagas.push(vaga)
      } else {
        alert("Salvamento da vaga cancelado, voltando para o Menu!")
      }
      break

    case "2":
      for(let i = 0; i < vagas.length;i++) {
        alert("Vaga (" +(i + 1)+ ")\n" +
              "Nome: " +vagas[i].nome+ "\n"+
              "Quantidade de candidatos: ") //LEMBRAR DE COLOCAR OS USUÁRIOS
      }
      break
    
    case "3":
      let indiceVaga = parseFloat(prompt("Digite o índice da vaga que deseja visualizar: ")) 

      for(let i = 0; i < vagas.length; i++) {
        if (indiceVaga == ([i]+1)) {
          alert("Vaga (" +(i + 1)+ ")\n"+
               "Nome da vaga: "+vagas[i].nome +
               "\nDescrição: " +vagas[i].descricao+
               "\nData limite da vaga: "+vagas[i].dataLimite+
               "\nQuantidade de candidatos: " +                //LEMBRAR DE COLOCAR OS CANDIDATOS
               "\nNome dos candidatos: ")
        }
      }
      break
    
      case "4":


      
  }


} while(option !== "6") {
  alert("O programa foi encerrado!")
}

