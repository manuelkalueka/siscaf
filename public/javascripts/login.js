() => {
    const btnCancelar = document.querySelector('#btnCancelar');
    btnCancelar.addEventListener('click', () => {
        document.querySelector('#userName').value = '';
        document.querySelector('#senha').value = '';

        location.href = '/';
    });
}