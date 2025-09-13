const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const num = Number(frm.inNumero.value)
    let divisores = `Divisores do ${num}: 1`
    let soma = 1

    for(let i = 2; i <= num/2; i++){
        if(num % i === 0){
         soma += i
         divisores += "," + i 
        }
    }

    resp1.innerText = `Divisores do ${num}: ${divisores} (Soma: ${soma})`

    if(soma === num){
        resp2.innerText = `${num} É um Número Perfeito`
    } else {
        resp2.innerText = `${num} não é um Número Perfeito`
    }
})