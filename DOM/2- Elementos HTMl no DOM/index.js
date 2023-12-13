function show() {
  const contactList = document.getElementById('contact-list') //Devolve o elemento| Devolve um unico elemento pelo ID
  console.log(contactList)

  const listElements = document.getElementsByTagName('li')  //Devolve em HTMLCollection| Selecionou tags com o mesmo nome, no caso, a lista inteira
  console.log(listElements)

  const contactInputs = document.getElementsByClassName('contact-input') //Devolve em HTMLCollection| Procura o nome de classe especifico
  console.log(contactInputs)

  const contacts = document.querySelectorAll('#contact-list > li > label') //Devolve em NodeList | Utiliza comandos parecidos com o CSS | Especifica mais
  console.log(contacts)

  const contact1 = document.getElementsByName('contact1') //Devolve em NodeList
  console.log(contact1)

  const firstContact = document.querySelector('#contact-list > li > label') //Devolve um unico elemento| Utiliza comandos parecidos com o CSS
  console.log(firstContact)
}

