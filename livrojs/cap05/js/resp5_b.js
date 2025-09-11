const frm = document.querySelector('form')
const resp = document.querySelector('pre')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    const anos = Number(frm.inAnos.value)
    let resposta = ""
    let total = numero

    for (let i = 1; i <= anos; i++) {
        resposta += i + "º Ano:" + total + "\n"

        if (i >= 1) { // só multiplica a partir do 2º ano
            total *= 3 // triplica a cada ano
        }
    }
    resp.innerText = resposta
})