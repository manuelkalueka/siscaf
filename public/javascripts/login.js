const btnCancelar = document.querySelector('#btnCancelar');
btnCancelar.addEventListener('click', () => location.href = '/');

function validarLogin() {
    const userNameElement = document.querySelector('#userName');
    const userSenhaElement = document.querySelector('#userPass');

    let user = userNameElement.value;
    let password = userSenhaElement.value;

    if (user == '') {
        alert('Nome de usuário inválido!');
        userNameElement.focus();
        userNameElement.className = 'campo focusErro';
        return;
    }

    if (password == '') {
        alert('Senha inválida!');
        userSenhaElement.focus();
        userSenhaElement.className = 'campo focusErro';
        return;
    }
}

const btnLogar = document.querySelector('#btnLogin');
btnLogar.addEventListener('click', validarLogin);

const userNameElement = document.querySelector('#userName');

userNameElement.addEventListener('blur', () => {//tentar tirar o focus de erro
    userNameElement.className = 'campo';
});