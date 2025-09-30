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
    const criptografia = resp.innerText.trim()
    const tam = criptografia.length

    if(!criptografia){
        resp.innerText = "Não há uma mensagem para decriptografar."
        return
    }

    // Determina os comprimentos das partes par e impar
    const tamPares = Math.ceil(tam/2)
    
    // Divide a string criptografia nas duas partes
    const pares = criptografia.substring(0, tamPares)
    const impares = criptografia.substring(tamPares)

    // Cria um array vazio para gravar a mensagem
    let msgDecripto = []

    for(let i = 0; i < tamPares; i++) {
        // Adiciona sempre o caractere par (que estava no índice i de 'pares')
        msgDecripto.push(pares[i])
        // Se ainda houver um caractere ímpar correspondente, adiciona
        if (impares[i]) {
        msgDecripto.push(impares[i])
        }
    }

    // exibe a mensagem
    resp.innerText = msgDecripto.join("")

})