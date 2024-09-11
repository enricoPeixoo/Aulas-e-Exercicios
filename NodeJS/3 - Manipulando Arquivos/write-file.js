const fs = require("node:fs") //Modulo Nativo!

const content = "Conteudo de novo arquivo assincrono"

fs.writeFile("./arquivo.txt", content, "utf-8", (error => {
    if(error) {
        console.log("Erro ao ler o arquivo ", error.message)
        return
    }

    console.log("Arquivo criado com sucesso de formaq assicnrona")

    
}))

// try {
//     fs.writeFileSync("./arquivo.txt", "Olá, mundo!","utf8")
//     console.log("Arquivo criado com sucesso!")

// } catch (error) {
//     console.log("Erro ao escrever o arquivo: ", error.message)
// }