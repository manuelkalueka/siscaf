() => {
    const btnLogin = document.querySelector('#btnLogin');
    const btnRegistar = document.querySelector('#btnRegistar');

    btnLogin.addEventListener('click', () => { location.href = '/login'; });

    btnRegistar.addEventListener('click', () => { location.href = '/registar'; });
}