const frm = document.querySelector("form")
const tbody = document.querySelector("tbody")
const cores = {
    '1': 'pre-operatorio', // Pré-Operatório
    '2': 'em-cirurgia',    // Em cirurgia
    '3': 'em-recuperacao', // Em recuperação
    '4': 'transferido'     // Transferido
}

const chaveStorage = "centroCirurgicoPacientes"
const statusMap = {
    '1': { nome: 'Pré-Operatório', classe: 'pre-operatorio', codigo: '802' },
    '2': { nome: 'Em cirurgia', classe: 'em-cirurgia', codigo: '101' },
    '3': { nome: 'Em recuperação', classe: 'em-recuperacao', codigo: '492' },
    '4': { nome: 'Transferido', classe: 'transferido', codigo: '245' }
};


function getPacientes() {
    const dados = localStorage.getItem(CHAVE_STORAGE);
    return dados ? JSON.parse(dados) : [];
}

function salvarPacientes(pacientes) {
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(pacientes));
}

function gravarPacientes() {
    e.preventDefault()
    const paciente = frm.inPaciente.value
    const status = frm.querySelector('select').value
    const local = frm.inLocal.value
    const inicioPrevisto = frm.inPrevisto.value
    const cirurgia = frm.inCirurgia.value
    const fimCirurgia = frm.inFim.value
    const saida = frm.inSaida.value

    if (!paciente || statusKey == 'Escolha uma opção...' || !local) {
        alert("Por favor, preencha o Nome do Paciente, Local e selecione um Status.");
        return;
    }
    const statusData = statusMap[statusKey];

    // Criação do Objeto Paciente
    const novoPaciente = {
        nome: paciente,
        status: statusData.nome + (statusData.codigo ? ` (${statusData.codigo})` : ''),
        statusClasse: statusData.classe,
        local: local,
        previsto: inicioPrevisto || '-',
        cirurgia: cirurgia || '-',
        fim: fimCirurgia || '-',
        saida: saida || '-'
    };

    // Adiciona ao LocalStorage
    const pacientes = getPacientes();
    pacientes.push(novoPaciente);
    salvarPacientes(pacientes);

    // Feedback e Atualização
    alert(`Paciente "${paciente}" gravado/atualizado com sucesso!`);
    frm.reset();
    renderizarTabelaGerenciamento();
}

function renderizarTabelaGerenciamento() {
    const pacientes = getPacientes();
    tbody.innerHTML = ''; // Limpa a tabela

    pacientes.forEach((p, index) => {
        const linha = tbody.insertRow();
        linha.className = p.statusClasse; // Aplica a cor de fundo

        linha.insertCell().textContent = p.nome;
        linha.insertCell().textContent = p.status;
        linha.insertCell().textContent = p.previsto;
        linha.insertCell().textContent = p.cirurgia;
        linha.insertCell().textContent = p.fim;
        linha.insertCell().textContent = p.saida;
        
        // Célula de Ações (Excluir)
        const celulaAcoes = linha.insertCell();
        const btExcluir = document.createElement('button');
        btExcluir.innerHTML = '<i class="bi bi-trash"></i>';
        btExcluir.className = 'btn btn-sm btn-outline-danger';
        btExcluir.title = 'Excluir Paciente';
        
        // Adiciona o evento de clique para excluir
        btExcluir.onclick = () => excluirPaciente(index);
        celulaAcoes.appendChild(btExcluir);
    });
}


