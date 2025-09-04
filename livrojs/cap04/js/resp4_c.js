const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const valor = Number(frm.inValor.value)
    let tempo
    let troco
    let valorTotal
    if(valor < 1){
        resp1.innerText = `Valor Insuficiente`
    } else if(valor >= 1 && valor < 1.75){
        tempo = 30
        valorTotal = valor * tempo
        troco = valor - 1.00
        resp1.innerText = `Tempo: ${tempo}min`
        resp2.innerText = `Troco: ${troco.toFixed(2)} `
    } else if (valor >= 1.75 && valor < 3.00) {
        tempo = 60
        valorTotal = valor * tempo
        troco = valor - 1.75
        resp1.innerText = `Tempo: ${tempo}min`
        resp2.innerText = `Troco: ${troco.toFixed(2)}`
    } else if (valor >=3) {
        tempo = 120
        valorTotal = valor * tempo
        troco = valor - 3.00
        resp1.innerText = `Tempo: ${tempo}`
        resp2.innerText = `Troco: ${troco.toFixed(2)}`
    }
})