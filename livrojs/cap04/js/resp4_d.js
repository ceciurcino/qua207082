const frm = document.querySelector('form')
const resp1 = document.getElementById('outResp1')
const resp2 = document.getElementById('outResp2')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    limparResp()
    const ladoA = Number(frm.inLadoA.value)
    const ladoB = Number(frm.inLadoB.value)
    const ladoC = Number(frm.inLadoC.value)
    if ((ladoA < ladoB + ladoC) && (ladoA < ladoB + ladoC) && (ladoA < ladoB + ladoC)) {
        resp1.innerText = `Lados podem formar um triângulo`

        if (ladoA === ladoB && ladoA === ladoC) {
            resp2.innerText = `Tipo: Equilátero`
        } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
            resp2.innerText = `Tipo: Isósceles`
        } else {
            resp2.innerText = `Tipo: Escaleno`
        }

    } else {
        resp1.innerText = `Não pode formar um triângulo`
    }

    function limparResp() {
        resp1.innerText = ""
        resp2.innerText = ""
    }

})


