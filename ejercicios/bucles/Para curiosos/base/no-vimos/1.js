console.log('No vimos - Ejercicio 1');

window.onload = () => {
    gsheets.getWorksheet('1i5g7So0PAzZ1hdGTbajOOpahzirQxkgoBLWdxarq9x8', 'cartones')
        .then(cartones => cartones.data)
        .then(cartones => cartones.map(Object.values))
        .then(cartones => {
            dibujarCartones(cartones);
        })
        .catch(err => console.error(err));
};



function dibujarCartones(cartones) {
    for (var i = 0; i < cartones.length; i++) {
        const div = document.createElement('div').classList.add('carton');
        const container = document.createElement('div').classList.add('carton-container');
        document.body.appendChild(div);
        div.appendChild(container);
        for (var j = 0; j < cartones[i].length; j++) {
            const divItinerate = document.createElement('div').classList.add('cuadrados');
            container.appendChild(divItinerate);   
            divItinerate.innerHTML(cartones[i][j]);
        }
    }
}

dibujarCartones();
