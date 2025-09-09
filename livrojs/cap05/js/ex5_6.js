const frm = document.querySelector('form')
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    let numeroDivisores = 0 // declara e inicializa contador
    for(let i = 1; i <= numero; i++){  // percorre todos os possíveis divisores de numero
        if(numero % i == 0){ // verifica se i (1,2,3...) é divisor do numero
            numeroDivisores++ // se é, incrementa contador
        }
    }
    if(numeroDivisores == 2){
        resp.innerText = `${numero} é primo`
    } else {
        resp.innerText = `${numero} NÃO é primo`
    }
})