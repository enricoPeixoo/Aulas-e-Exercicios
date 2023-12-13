let option

do {
  option = prompt("MENU\n\n1- Área do triângulo\n2- Área do retângulo\n3- Área do quadrado\n4- Área do trapézio\n5- Área do círculo\n6- Sair")

  switch(option) {
    case "1":
      triangleArea()
      break
    case "2":
      rectangleArea()
      break
    case "3":
      squareArea()
      break
    case "4":
      trapezeArea()
      break
    case "5":
      circleArea()
      break
  }

} while (option !== "6") {
  alert("O programa foi encerrado!")
}

function triangleArea (base = parseFloat(prompt("Digite a base do triângulo: ")), hight =parseFloat(prompt("Digite a altura do triângulo: "))){
  const areaTri = (base*hight)/2
  return alert("A área do triângulo é: "+areaTri)
}

function rectangleArea (base =parseFloat(prompt("Digite a base do retângulo: ")), hight =parseFloat(prompt("Digite a altura do retângulo: "))){
  const areaRec = base*hight
  return alert("A área do retângulo é: "+areaRec)
}

function squareArea (side =parseFloat(prompt("Digite o lado do quadrado: "))){
  const areaSquare = (side*side)
  return alert("A área do quadrado é: "+areaSquare)
}

function trapezeArea (bBase = parseFloat(prompt("Digite a base maior do trápezio: ")), sBase = parseFloat(prompt("Digite a base menor do trápezio: ")) , hight = parseFloat(prompt("Digite a altura do trápezio"))) {
  const areaTrapeze = ((bBase + sBase)*hight)/2
  return alert("A área do trapézio é: " +areaTrapeze)
}

function circleArea (radius =parseFloat(prompt("Digite o raio do círculo: "))) {
  const areaCircle = (radius*radius)*3.14
  return alert("A área do círculo é: "+areaCircle)
}

