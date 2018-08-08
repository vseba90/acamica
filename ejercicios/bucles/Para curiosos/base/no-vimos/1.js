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
    console.log(cartones);
}