const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
})

frm.btCripto.addEventListener("click", () => {
    const mensagem = frm.inMensagem.value.trim()
    let pares = ""
    let impares = ""
    
    for(i = 0; i < mensagem.length; i++) {
        if(i % 2 == 0) {
            pares += mensagem.charAt(i)
        } else{
            impares += mensagem.charAt(i)
        }
    }

    const criptografia = pares + impares
    resp.innerText = criptografia 
})

frm.btDecripto.addEventListener("click", () =>{
    
})