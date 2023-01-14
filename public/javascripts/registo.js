const txtUsuario = document.querySelector('#txtUsuario');
const txtSenha = document.querySelector('#txtSenha');
const txtConfSenha = document.querySelector('#txtConfSenha');
const txtCodFuncionario = document.querySelector('#txtCodFuncionario');
const btnCancelar = document.querySelector('#btnCancelar');

function registarUsuario() {
    let usuario = txtUsuario.value;
    let senha = txtSenha.value;
    let ConfSenha = txtConfSenha.value;
    let codFuncionario = Number(txtCodFuncionario.value);

    if (usuario == '' || senha == '' || codFuncionario == 0) {
        alert('Verifica seus Dados!!');
        txtUsuario.focus();
        return;
    }

    /*
    if (ConfSenha != senha) {
        const outValidaSenha = document.querySelector('#outValidaSenha'); 
        outValidaSenha.textContent += '\nOs Campos de senha devem ser iguais';
        txtSenha.focus();
        return;
    }
    */
}

const btnRegistar = document.querySelector('#btnRegistar');
btnRegistar.addEventListener('click', registarUsuario);

//ToDO - Criar condition de senhas iguais nessa funcao

function validarSenha() {
    const outValidaSenha = document.querySelector('#outValidaSenha');
    let senha = txtSenha.value
    let erros = [];

    if (senha.length < 8 || senha.length > 15) {
        erros.push('Possuir entre 8 a 15 caracteres');
    }

    if (senha.match(/[0-9]/g) == null) {
        erros.push('Possuir números (no mínimo, 1)');
    }

    if (!senha.match(/[a-z]/g)) {
        erros.push('Possuir letras minúsculas (no mínimo, 1)');
    }

    if (!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length < 1) {
        erros.push('Possuir letras maiúsculas (no mínimo 1)');
    }

    if (!senha.match(/[\W|_]/g)) {
        erros.push('Possuir símbolos (no mínimo 1)');
    }

    if (txtConfSenha.value == !senha) {
        erros.push('Os campos senha devem ser iguais')
    }

    if (erros.length == 0) {
        outValidaSenha.textContent = 'OK! Senha Válida';
    } else {
        outValidaSenha.textContent = 'A senha deve ' + erros.join('\n')
    }
}

txtSenha.addEventListener('blur', validarSenha);

btnCancelar.addEventListener('click', () => {
    location.href = '/';
});