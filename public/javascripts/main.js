function mostrarData() {
    const dateLocal = document.querySelector('#dateLocal');
    const minhaData = [{
        dia: new Date().getDate(),
        mes: new Date().getMonth() + 1,
        ano: new Date().getFullYear(),
        hora: new Date().getHours(),
        minuto: new Date().getMinutes(),
        second: new Date().getSeconds()
    }];

    dateLocal.textContent = `${minhaData[0].dia}/${minhaData[0].mes}/${minhaData[0].ano} ${minhaData[0].hora}:${minhaData[0].minuto} ${minhaData[0].second}`;
}

mostrarData();

const btnDash = document.querySelector('#btnDash').addEventListener('click', () => {
    location.href = '/dashboard';
});

const btnInscricoes = document.querySelector('#btnIncscricoes').addEventListener('click', () => {
    location.href = '/inscricoes';
});

const btnPagamentos = document.querySelector('#btnPagamentos').addEventListener('click', () => {
    location.href = '/pagamentos';
});

const btnSobre = document.querySelector('#btnSobre').addEventListener('click', () => {
    location.href = '/sobre';
});

const btnCursos = document.querySelector('#btnCursos').addEventListener('click', () => {
    location.href = '/cursos';
});

const btnPerfil = document.querySelector('#btnProfile').addEventListener('click', () => {
    location.href = '/perfil';
});

const btnVerAlunos = document.querySelector('#btnVerAlunos').addEventListener('click', () => {
    location.href = '/ver_alunos';
});

//Abrir Modal Configuracoes
function abrirModalConfig() {
    const configModal = document.querySelector('#config-modal');

    configModal.classList.add('abrirModalConfig');

    configModal.addEventListener('click', (evento) => {
        if (evento.target.id == 'fecharModal' || evento.target.id == 'config-modal') {
            configModal.classList.remove('abrirModalConfig');
        }
    });
}

const btnConfig = document.querySelector('#btnConfig');
btnConfig.addEventListener('click', abrirModalConfig);