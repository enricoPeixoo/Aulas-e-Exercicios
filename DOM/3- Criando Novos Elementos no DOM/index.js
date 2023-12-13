function addInput() {
  const ul = document.getElementById('inputs') //Vai procurar o elemento pelo ID = input

  const newLi = document.createElement('li') //Cria um novo elemento no HTML (lista)
  newLi.className = 'list-item' //O nome da classe da lista
  newLi.innerText = 'Novo Input: ' //InnerText (coloca um texto dentro da tag) ou o InnerHTML(Voce usa o comando HTML no codigo, mas não é bom para seguranca)

  const newInput = document.createElement('input') //cria um elemento
  newInput.type = 'text' //tipo do elemento será input
  newInput.name = 'input' //com o nome input

  newLi.appendChild(newInput) //adiciona um elemento filho! No caso um input dentro da lista
  ul.appendChild(newLi)
}