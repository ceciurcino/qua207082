const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

frm.addEventListener('submit', (e)=>{
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)

    const promo = preco * 0.5
    const total = (preco * 2) + promo
   
    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${total}`
    resp2.innerText = `O 3º produto custa apenas R$: ${promo}`

    e.preventDefault()
})