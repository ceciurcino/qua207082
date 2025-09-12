const frm = document.querySelector('form')
const resp = document.querySelector('pre')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    let numero = Number(frm.inNumero.value)
    const anos = Number(frm.inAnos.value)

    for (let i = 1; i <= anos; i++) {
          resp.innerText += `${i}º Ano: ${numero} Chinchilas\n`
            numero *= 3 // triplica a cada ano
        }
    
})