const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const divConvenio = document.querySelector("#divConvenio")

// quando o radio button sim é clicado
frm.rbSim.addEventListener("click", () => {
    divConvenio.className = "exibe"
})

// quando o radio button nao é clicado
frm.rbNao.addEventListener("click", () => {
    // Retorna para a classe "oculta"
    divConvenio.className = "oculta"; 
})


frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const valor = Number(frm.inValor.value)
    const convenio = frm.inConvenio.value
    let taxa = 0
    if(frm.rbNao.checked){ 
        taxa = 0.10 // 10% de desconto
    }
    
    if(frm.rbSim.checked){
        // verifica qual convenio está marcado
        if(convenio == "Amigo") {
            taxa = 0.20 // 20% de desconto
        } else {
            taxa = 0.50 // 50% de desconto
        }
    }

    const valorDesconto = calcularDesconto(valor,taxa)
    const valorFinal = valor - valorDesconto
    resp1.innerText = `Desconto R$: ${valorDesconto}`
    resp2.innerText = `A Pagar R$: ${valorFinal.toFixed(2)}`
})

// função para calcular o desconto
function calcularDesconto(valor,taxa){
    const desconto =  valor * taxa
    return desconto.toFixed(2)
}