const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    /* if tradicional
    if(numero % 2 === 0) {
        resp.innerText = `${numero} é par.`
    } else {
        resp.innerText = `${numero} é ímpar.`
    }
    */
    // operador ternário
    resp.innerText = (numero % 2 === 0) ? `${numero} é par.` : `${numero} é ímpar.`
})
