const frm = document.querySelector('form')
const resp = document.querySelector('pre')
const numeros = []

// Adiciona um Event Listener no formulário para o evento 'submit'
frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    
    // Verifica se o número já existe no vetor
    if (numeros.includes(numero)) {
        alert('Este número já foi incluído na lista.');
        frm.inNumero.value = '';
        frm.inNumero.focus();
        return;
    }

    numeros.push(numero);
    frm.inNumero.value = '';
    frm.inNumero.focus();
    
    if (numeros.length === 0) {
        resp.innerText = 'Nenhum número foi adicionado.';
    } else {
        const lista = numeros.join(', ');
        resp.innerText = `Números: ${lista}`;
    }
})

// Adiciona um Event Listener ao botão "Verificar Ordem"
frm.btVerificar.addEventListener('click', () => {
    if (numeros.length === 0) {
        resp.innerText = 'Nenhum número foi adicionado.';
        return;
    }
    
    let estaEmOrdem = true;

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < numeros[i - 1]) {
            estaEmOrdem = false;
            break;
        }
    }

    if (estaEmOrdem) {
        resp.innerText = 'Os números estão em ordem crescente.';
    } else {
        resp.innerText = 'Os números NÃO estão em ordem crescente.';
    }
});