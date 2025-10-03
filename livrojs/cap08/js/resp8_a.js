const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    const idade = Number(frm.inIdade.value)
    const tracos = retornarTracos(nome)
    const categoria = categorizarAluno(idade)
    resp.innerText = nome + "\n" + tracos + "\n" + categoria

})
// função para adicionar espaços ou - abaixo do nome
function retornarTracos(nome) {
    let linhaTracos = "" // variável para armazenar o resultado final
    for (let i = 0; i < nome.length; i++) {
        let caractere = nome[i]

        // se o caractere for espaço vazio, adiciona espaço vazio
        if (caractere == " ") {
            linhaTracos += " "
            // se não, adiciona "-"
        } else {
            linhaTracos += "-"
        }
    }
    return linhaTracos
}
// função para selecionar a categoria do aluno
function categorizarAluno(idade) {
    if (idade >= 0 && idade <= 12) {
        return "Infantil"
    } else if (idade <= 18) {
        return "Juvenil"
    } else {
        return "Adulto"
    }
}