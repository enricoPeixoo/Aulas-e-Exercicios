let option = ""
const properties = []

do{
  option = prompt("MENU\n\nImóveis Cadastrados: " + properties.length + "\n\n1- Salvar imóvel\n2- Mostrar imóveis\n3- Sair")

  switch(option) {
    case "1":
      const propertie = {}

      propertie.nameProp = prompt("Informe o nome do proprietário do imóvel: ")
      propertie.rooms = prompt("Informe a quantidade de quartos do imóvel: ")
      propertie.bathrooms = prompt("Informe a quantidade de banheiros do imóvel: ")
      propertie.garage = prompt("O imóvel possui garagem: (Sim/Não)")

      const confirm = prompt("Nome do Proprietário: " +propertie.nameProp + 
                            "\nQuantidade de quartos: "+propertie.rooms + 
                            "\nQuantidade de banheiros: "+propertie.bathrooms+
                            "\nPossui garagem: "+propertie.garage +
                            "\n\nDeseja confirmar o salvamento desse imóvel? (Sim/Não)")

      if(confirm === "Sim") {
        properties.push(propertie)
        alert("Imovel salvo com sucesso!")
      } else {
        alert("Salvamento do imóvel cancelado, voltando para o menu!")
      }     
      break 
      
    case "2":
      for(let i = 0;i < properties.length;i++){
        alert("IMÓVEL " + (i + 1) + 
        "\n Proprietário: " + properties[i].nameProp +
        "\n Quantidade de quartos: " +properties[i].rooms +
        "\n Quantidade de banheiros: "+properties[i].bathrooms +
        "\n Garagem: "+properties[i].garage)
      }
      break
  }
}
while(option !== "3"){
  alert("O programa foi encerrado!")
}
