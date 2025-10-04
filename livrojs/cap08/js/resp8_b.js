const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value.trim()
    if (validarNome(nome)) {
        const sobrenome = obterSobrenome(nome)
        const vogais = contarVogais(nome)
        const senha = sobrenome + vogais
        resp.innerText = `Senha Inicial: ${senha}`
    } else {
        resp.innerText = "Nome Incompleto! Por favor, digite o nome completo"
    }
    
  
})

// função para validar o preenchimento de um nome completo 
function validarNome(nome) {
    // se o nome tiver um espaço em branco ele retorna true, se não tiver retorna false
    return nome.includes(" ")
}

// função para obter o último nome
function obterSobrenome(nome) {
    const partesNome = nome.split(" ")
    const ultimoNome = partesNome[partesNome.length-1]
    return ultimoNome.toLowerCase()
}

// função para contar o número de vogais 
function contarVogais(nome) {
    const nomeMinusculo = nome.toLowerCase()
    const vogaisEncontradas = nomeMinusculo.match(/[aeiou]/g)
    const numVogais = (vogaisEncontradas || []).length //  se caso não tiver nenhuma vogal, vai retornar 0
    const num = numVogais.toString().padStart(2,"0")
    return num
}
