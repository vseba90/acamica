/*
    OBJETIVO: Obtener unas coordenadas (fila y columna) para modificar la matriz
    inicial cambiando toda la fila y toda la columna por un nuevo caracter

    Ejemplo, tomando la matriz

    [
        ['X', 'X', 'X'],
        ['X', 'X', 'X'],
        ['X', 'X', 'X'],
        ['X', 'X', 'X'],
    ]

    e ingresando 1 como fila y 2 como columna, la matriz debería quedar así

    [
        ['O', 'O', 'O'],
        ['X', 'O', 'X'],
        ['X', 'O', 'X'],
        ['X', 'O', 'X'],
    ]
*/

var matriz = [
    ['X', 'X', 'X'],
    ['X', 'X', 'X'],
    ['X', 'X', 'X'],
    ['X', 'X', 'X'],
];

var fila = parseInt(prompt('Ingrese un número de fila (1 a 4)'));
var columna = parseInt(prompt('Ingrese un número de columna (1 a 3)'));

function expandir(numeroFila, numeroColumna, caracter) {

}

// Muestro por consola el "antes"
console.log(matriz);

// Aplico la transformación
expandir(fila, columna, 'O');

// Muestro el resultado final
console.log(matriz);
