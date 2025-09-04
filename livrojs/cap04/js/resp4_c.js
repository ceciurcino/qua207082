const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const valor = Number(frm.inValor.value)
    let troco
    let valorTotal
    if(valor < 1){
        resp1.innerText = `Valor Insuficiente`
    } else if(valor >= 1 && valor < 1.75){
        valorTotal = valor * 30
        troco = valor - 1
        resp1.innerText = `Tempo = ${tempo}min`
        resp2.innerText = `Troco `
    } else if (valor >= 1.75 && valor < 3.00) {

    }
})