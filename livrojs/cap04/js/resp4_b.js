const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const vPermitida = Number(frm.inVelocidade.value)
    const vCondutor = Number(frm.inCondutor.value)
    const multaLeve = vPermitida * 1.2

    if(vCondutor <= vPermitida) {
        resp.innerText = `Sem Multa`
    } else if (vCondutor <= multaLeve) {
        resp.innerText = `Multa Leve`
    } else {
        resp.innerText = `Multa Grave`
    }
})