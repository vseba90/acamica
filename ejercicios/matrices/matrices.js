console.log('Matrices');
/*Recorrer la siguiente matriz 
    [[15, 25, 33], 
    [45, 32, 67], 
    [74, 86, 99]]*/

/* var matriz = [
    [15, 25, 33],
    [45, 32, 67],
    [74, 86, 99]
];

for(var i = 0; i < matriz.length; i++){
    var fila = matriz[i];
    for(var j = 0; j < fila.length; j++){
        var columna = matriz[i][j];
        console.log(columna);
    }
} */

/* var matriz = [
    [15, 25, 33],
    [45, 32, 67],
    [74, 86, 99]
];
var preguntaUsuario = prompt('Ponga un numero para determinar si esta en la matriz');
var numero = parseInt(preguntaUsuario);

var existe = false;

for(var i = 0; i < matriz.length; i++){
    for(var j = 0; j < matriz[i].length; j++){
        if(numero === matriz[i][j]){
          existe = true;
        } 
    }
}

if(existe === true){
   console.log('El numero ' + numero + ' existe');
} else {
  console.log('El numero ' + numero + 'no existe');
} */


var cajas = [
    ['Branding', 1, 'Guau', ['seba', 'Sebastian Villanueva', 'Maquetador', 27], '28/12/18', 15000],
    ['Qr', 2, 'Hola lala', ['sebastian', 'Villanueva', 'Maquetador AI', 27], '11/02/11', 150],
    ['WW', 3, 'lalo Landa', ['seaba', 'Sebastian', 'Maquetador Web', 27], '28/11/16', 500],
    ['JJ', 4, 'Perrito', ['sebwwa', 'Sebueva', 'Maquetadorww', 27], '20/02/19', 12000]
]

for(var i = 0; i < cajas.length; i++){
        console.log('Nombre : ' + cajas[i][0]);
        console.log('id : ' + cajas[i][1]);
        console.log('Desc : ' + cajas[i][2]);
        console.log('dev : ' + cajas[i][3]);
        console.log('fecha : ' + cajas[i][4]);
        console.log('plata : ' + cajas[i][5]);
        console.log('');
}

