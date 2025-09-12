const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    let divisores = ""
    let soma = 0

    for(let i = 1; i < numero; i++){
        if(numero % i === 0){
         soma += i
         divisores += i + ","
        }
    }

    resp1.innerText = `Divisores do ${numero}: ${divisores} (Soma: ${soma})`

    if(soma === numero){
        resp2.innerText = `${numero} É um Número Perfeito`
    } else {
        resp2.innerText = `${numero} não é um Número Perfeito`
    }
})