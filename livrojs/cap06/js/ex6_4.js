const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const criancas = [] // declara vetor global
// incluir crianças fixas
criancas.push({ nome: "Lucas", idade: 4 })
criancas.push({ nome: "Ana", idade: 3 })
criancas.push({ nome: "Bianca", idade: 6 })
criancas.push({ nome: "Pedro", idade: 6 })
criancas.push({ nome: "João", idade: 4 })
criancas.push({ nome: "Maria", idade: 4 })
criancas.push({ nome: "Juliana", idade: 3 })
criancas.push({ nome: "Cátia", idade: 6 })


frm.btListar.addEventListener("click", () => {
    if (criancas.length == 0) {
        alert("Não há crianças na lista")
        return
    }
    // método reduce() concatena uma string, obtendo info de cada criança
    const lista = criancas.reduce((acumulador, crianca) =>
        acumulador + crianca.nome + ` - ${crianca.idade} anos \n`, "")
    resp.innerText = `Lista das Crianças:\n${"-".repeat(40)}\n${lista}`
})

// dispara o evento de click em btListar (equivale um click no botão)
frm.btListar.dispatchEvent(new Event("click"))

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value
    const idade = Number(frm.inIdade.value)
    criancas.push({ nome, idade }) // adiciona dados ao vetor de objetos
    // limpar campos do form
    frm.inNome.value = ""
    frm.inIdade.value = ""
    frm.inNome.focus()
    // atualiza a lista das crianças na tela
    frm.btListar.dispatchEvent(new Event("click"))
})

frm.btResumir.addEventListener("click", () => {
    // verificar se a lista está zerada?
    if (criancas == 0) {
        alert("Não há crianças na lista")
        return
    }
    // criar a copia do vetor criança
    const copia = [...criancas]
    // ordenar pela idade
    copia.sort((a, b) => a.idade - b.idade)
    // criar uma variável para concatenar o retorno
    let resumo = ""
    // salvar a menor idade do vetor
    let aux = copia[0].idade
    // criar um vetor para gravar a lista dos nomes por idade
    let nomes = []
    // iniciar um loop para percorrer o vetor de cópia
    for (const crianca of copia) {
        const { nome, idade } = crianca // desestruturação
        // verificar se a idade permanece igual
        if (aux == idade) {
            // se sim incluir o nome da criança na lista nomes
            nomes.push(nome)
        } else { 
            // senão montar resumo para cada idade
            resumo += `${aux} ano(s) : ${nomes.length} criança(s) - `
            resumo += ((nomes.length/copia.length)*100).toFixed(2)+"%\n"
            resumo += `(${nomes.join(", ")})\n\n`
            // atualiza a idade aux
            aux = idade
            // limpa o vetor nome
            nomes = []
            // adiciona o primeiro nome da nova idade
            nomes.push(nome)
        }
    }
    resumo += `${aux} ano(s) : ${nomes.length} criança(s) - `
    resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
    resumo += `(${nomes.join(", ")})\n\n`
    resp.innerText = resumo
})