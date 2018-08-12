console.log('Ciclo For - Ejercicio 8');

/* Dado el array [1,2,3,4,5,6] y un segundo array vacío [], recorrer el primero y usar el método push para agregar todos los valores del array inicial incrementados en 1 al array vacío. Mostrar por terminal el segundo array, el que inicialmente estaba vacío.  */

var array = [1,2,3,4,5,6];
var arrayNuevo = [];

for(var i = 0; i < array.length; i++){
    arrayNuevo.push(array[i] + 1);
}
console.log(arrayNuevo);