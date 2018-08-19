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

document.body.appendChild(carton);
var carton = document.createElement('div');
carton.classList.add('carton');
var cuadrados = document.createElement('div');
cuadrados.classList.add('cuadrados');

function dibujarCartones(cartones) {
    for(var i = 0; i < cartones.lenght; i++){
        carton.appendChild(cuadrados);
    }
}

dibujarCartones();
