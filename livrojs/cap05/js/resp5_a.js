const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const fruta = frm.inFruta.value
    const numero = Number(frm.inNumero.value)
    let saida = ""
    for(let i = 1; i <= numero; i++){
        saida += fruta
        if(i < numero) { // só adiciona * se não for o último
            saida += "*"
        }
     }
    resp.innerText = `${saida}`
})