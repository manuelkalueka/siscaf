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