function mostrarData() {
    const dateLocal = document.querySelector('#dateLocal');
    const minhaData = [{
        dia: new Date().getDate(),
        mes: new Date().getMonth() + 1,
        ano: new Date().getFullYear(),
        hora: new Date().getHours(),
        minuto: new Date().getMinutes(),
    }];

    dateLocal.textContent = `${minhaData[0].dia}/${minhaData[0].mes}/${minhaData[0].ano} ${minhaData[0].hora}:${minhaData[0].minuto}`;
}

mostrarData();