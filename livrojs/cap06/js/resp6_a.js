const frm = document.querySelector('form')
const resp = document.querySelector('pre')
const clubes = ['Flamengo', 'Corinthias', 'Palmeiras', 'Santos'] // vetor global para armazenar os clubes

frm.addEventListener('submit', (e) =>{
    e.preventDefault()
    const nomeClube = frm.inClube.value
      if (nomeClube === '') {
        alert('Por favor, informe o nome do clube.');
        frm.inClube.focus();
        return;
      }

    clubes.push(nomeClube)
    frm.inClube.value = ''
    frm.inClube.focus()     
    listarClubes()
})

  // Lógica para listar clubes
  frm.btListar.addEventListener('click', () => {
    if (clubes.length === 0) {
        resp.innerText = 'Nenhum clube cadastrado.'
        return
    }
    const lista = clubes.map((clube, num) => `${num + 1}. ${clube}`).join('\n')
    resp.innerText = lista
    
  })

  // Adiciona um Event Listener ao botão "Montar Tabela de Jogos"
  frm.btMontar.addEventListener('click', () => {
    if (clubes.length === 0 || clubes.length % 2 !== 0) {
        alert('O número de clubes deve ser par para gerar a tabela.')
        frm.inClube.focus()
        return;
    }
    const jogos = [];
    const meio = clubes.length / 2

    for (let i = 0; i < meio; i++) {
        const jogo = `${clubes[i]} x ${clubes[clubes.length - 1 - i]}`
        jogos.push(jogo);
    }

    resp.innerText = jogos.join('\n')
});




function listarClubes() {
    if (clubes.length === 0) {
        resp.innerText = 'Nenhum clube cadastrado.';
        return;
    }

    const lista = clubes.map((clube, num) => `${num + 1}. ${clube}`).join('\n');
    resp.innerText = lista;
}