const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    const raiz = Math.sqrt(numero) // calcula raiz quadrada no número

    if(Number.isInteger(raiz)){ // se valor da raiz for um número inteiro
        resp.innerText = `Raiz: ${raiz}`  // ...mostra a raiz
    } else {
        resp.innerText = `Não há raiz exata para ${numero}` // ...mostra mensagem
    }
})