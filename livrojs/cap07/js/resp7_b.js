const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
})
frm.btVerificar.addEventListener("click", () => {
    // Obter a frase
    const frase = frm.inFrase.value.trim()

    // Verificar se o campo está vazio
    if(frase == ""){
        resp.innerText = "Por favor, digite uma frase"
        frm.inFrase.focus()
        return
    }

    // Limpar e converter para caixa alta
    // /[^a-zA-Z0-9]/g  encontra qualquer caractere q não seja letra (a-z ou A-Z) e número(0-9)
    let fraseLimpa = frase.toUpperCase().replace(/[^a-zA-Z0-9]/g, "")

    // Inverter a frase limpa
    let fraseInvertida = fraseLimpa.split("").reverse().join("")

    // Comparação e exibição do resultado
    if(fraseLimpa == fraseInvertida){
        resp.innerText = `${frase.toUpperCase()} é um Palíndromo`
    }else{
        resp.innerText = `${frase.toUpperCase()} não é um Palíndromo`
    }
})