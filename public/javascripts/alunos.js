function abrirModalNovo() {
    const novoModal = document.querySelector('#novo-modal');

    novoModal.classList.add('abrirModal');

    novoModal.addEventListener('click', (evento) => {
        if (evento.target.id == 'fechar' || evento.target.id == 'novo-modal') {
            novoModal.classList.remove('abrirModal');
        }
    });
}

function abrirModalEditar() {
    const novoModal = document.querySelector('#editar-modal');

    novoModal.classList.add('abrirModal');

    novoModal.addEventListener('click', (evento) => {
        if (evento.target.id == 'fechar' || evento.target.id == 'editar-modal') {
            novoModal.classList.remove('abrirModal');
        }
    });
}

const btnCriarRegistro = document.querySelector('#btnCriarRegistro');
btnCriarRegistro.addEventListener('click', abrirModalNovo);

const btnEditarRegisto = document.querySelector('#btnEditarRegisto');
btnEditarRegisto.addEventListener('click', abrirModalEditar);

const btnCancelar = document.querySelector('#btnCancelar');

btnCancelar.addEventListener('click', () => {
    if (confirm('Está acção limpará todos dados preechidos, continuar?')) {

    }
    else {

        return;
    }
});