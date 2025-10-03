const frm = document.querySelector("form")
const resp = document.querySelector("pre")
// função para adicionar espaços ou - abaixo do nome
function retornarTracos(nome) {
    let linhaTracos = "" // variável para armazenar o resultado final
    for(let i = 0; i <= nome.length; i++) {
        let caractere = nome.[i]
    }
    // se o caractere for
    if(caractere == " "){
        linhaTracos += " "
    }else {
        linhaTracos += "-"
    }
}