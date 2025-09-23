const frm = document.querySelector('form')
const resp = document.querySelector('pre')

const candidatos = []
candidatos.push({ nome: "André", acertos: 35 })
candidatos.push({ nome: "Bianca", acertos: 29 })
candidatos.push({ nome: "Carlos", acertos: 27 })
candidatos.push({ nome: "Débora", acertos: 33 })
candidatos.push({ nome: "Eduardo", acertos: 36 })
candidatos.push({ nome: "Fernanda", acertos: 28 })
candidatos.push({ nome: "Giovana", acertos: 31 })

frm.btListar.addEventListener("click", () => {
    if (candidatos.length == 0) {
        alert("Lista de candidatos vazia!")
        return
    }
    resp.innerText = ""
    for (const candidato of candidatos) {
        const { nome, acertos } = candidato
        resp.innerText += `${nome} - ${acertos} acertos\n`
    }
})

frm.btListar.dispatchEvent(new Event("click"))

frm.btAprovados.addEventListener("click", () => {
    const numAcertos = Number(prompt("Número de Acertos para Aprovação?"))
    
    if (numAcertos === 0 || isNaN(numAcertos)) {
        alert("Digite um valor válido.");
        return;
    }

    const aprovados = candidatos.filter(candidato => candidato.acertos >= numAcertos)

    if (aprovados.length == 0) {
        alert("Nenhum aprovado com essa quantidade")
        return
    }
    aprovados.sort((a, b) => b.acertos - a.acertos)
    resp.innerText = ""
    for (const candidato of aprovados) {
        const { nome, acertos } = candidato
        resp.innerText += `${nome} - ${acertos} acertos\n`
    }
})

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const nome = frm.inCandidato.value
    const acertos = Number(frm.inAcertos.value)
    candidatos.push({ nome, acertos })

    const lista = candidatos.map(c => `${c.nome} - ${c.acertos} acertos`).join("\n")
    resp.innerText = lista

    // limpa  os campos do form
    frm.reset()
    inCandidato.focus()

})

