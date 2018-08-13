console.log('Bucles - Ejercicio 3');

/* Hacer un programa para ingresar por teclado 10 números enteros, luego determinar e informar el máximo y su posición. Suponer que los valores de la lista pueden ser todos positivos, todos negativos, ceros, o cualquier combinación. */

var lista = [];
var agregar = 0;

for (var i = 0; i < 10; i++) {
    agregar = parseInt(prompt('Ingrese un numero'));
    lista.push(agregar);
}
console.log(lista);
var listaMayor = Math.max(...lista);
var listaIndice = lista.indexOf(listaMayor);

console.log('El numero mas grandes es: ' + listaMayor + ' y su indice es ' + listaIndice);