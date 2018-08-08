// Se va a repetir hasta que el resultado sea Teban
/*
while(nombre !== 'Teban'){
    var nombre = prompt('¿Como es tu nombre?');
    console.log(nombre);
}

var array = [22, 12, 11, 51, 82];
for(var i = 0; i < array.length; i++){
    console.log(array[i]);
}*/

// Teniendo un array, como puedo saber si esta ordenado
/*
var array = [22, 12, 11, 51, 82];
var cantidad = array.lenght -1;
for(var i = 0; i < cantidad; i++){
    var elemento = arra[i];
    var elementoSiguiente = [i + 1];

    if(elemento < elementoSiguiente){
        true;
    }
}

var i = 0;
var ordenado = true;
while(ordenado && i < cantidad){
    if(array[i] > array[i + 1]){
        ordenado = false;
    }
    i++;
}

console.log(ordenado);*/
/*
1 - A partir del array[2, 4, 6, 8, 10] mostrar en la terminal la SUMATORIA de todos los elementos
2 - El siguiente array[3, 8, 9, 4, 7] representa las notas de cada uno de los alumnos de un curso
Teniendo en cuenta que aprueba con 7 o más, mostrar por la terminal CUANTOS de ellos aprobaron
3 - Repetir el ejercicio 4 pero permitiendo que el usuario pueda cargar(por medio de 5 prompts) cada
uno de los valores del array*/
/* var numero = [2, 4, 6, 8, 10];
var suma = 0;
for (var i = 0; i < numero.length; i++) {
    suma += numero[i];
}
console.log(suma);
var notas = [3, 8, 9, 4, 7]; */

// 1- Mostrar por la consola los números desde 1 al 100

/* for (let i = 1; i <= 100; i++) {
    console.log(i);
} */
////////////////////////////////////////////////////////

// 2- Mostrar por la consola  los números desde 100 al 1
/* 
for (let i = 100; i >= 1; i--) {
    console.log(i);
} */

/////////////////////////////////////////////////////////

// 3- Mostrar por la consola  los números desde el -50 al 50

/* for (var i = -50; i <= 50; i++) {
    console.log(i);
} */

//////////////////////////////////////////////////////

// 4- Mostrar por la consola  los números pares entre el 50 y el -200 en orden creciente (del número más chico al más grande)

/* for (let i = -200; i <= 50; i = i + 2) {
    console.log(i);
}

 */
//////////////////////////////////////////////////////

// 6- Pedirle al usuario un número y mostrar por la terminal los números entre 1 y ese número

/* var numero = parseInt(prompt('Dame un numero'));

for (var i = 0; i <= numero; i++) {
    console.log(i);
}
 */
/* 5- Mostrar por la consola USANDO 2 CICLOS el siguiente dibujo (como máximo las estrellas llegan hasta 15)

***************
**************
*************
************
***********
**********
*********
********
*******
******
*****
****
***
**
*
**
***
****
*****
******
*******
********
*********
**********
***********
************
*************
**************
*************** */
var fila = [];
var columna = [];
var estrellas = [fila, columna];
for (var i = 0; i < estrellas; i++) {
    estrellas[fila].push('*');
}
console.table(estrellas);