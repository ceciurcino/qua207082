const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    let soma = 0
    let divisores = ""
})