/*
  Tipos de datos que ya conocemos
  String, Number, Boolean, undefined
*/
var nombre = 'Acamica'
console.log(nombre); // Acamica
/*
  Algunos tipos de datos tienen "superpoderes"
*/
console.log(nombre.toUpperCase()); // ACAMICA
console.log(nombre.toLowerCase()); // acamica
console.log(nombre.length[0]);
/*
  Array
*/
var arr = [1, 2, 3, 4, 5];
console.log(arr); // [1, 2, 3, 4, 5]
var arr2 = [];
arr2[0] = 1;
arr2[1] = 2;
arr2[2] = 3;
arr2[3] = 4;
arr2[4] = 5;
console.log(arr2); // [1, 2, 3, 4, 5]
/*
  Los arrays también tienen superpoderes
  https://devhints.io/js-array
*/
console.log(arr.length); // 5
console.log(arr[1]); // 2
console.log(arr.push(100)); // 6
console.log(arr); // [1, 2, 3, 4, 5, 100]
console.log(arr.pop()); // 100
console.log(arr); // [1, 2, 3, 4, 5]
console.log(arr.shift()); // 1
console.log(arr); // [2, 3, 4, 5]
/*
  ¿Por qué estamos aprendiendo esto?
    1- La mayoría de las APIs del DOM trabajan con arrays (document.getElementsByClassName)
    2- Es una estructura de datos que nos permite trabajar de manera genérica con múltiples valores
*/
/*
  Ejercicios
    1- A partir del array [1, 2, 3, 4, 5] mostrar en la terminal la CANTIDAD de elementos
    2- A partir del array [2, 4, 6, 8, 10] mostrar en la terminal la SUMATORIA de todos los elementos
    3- Hacer un programa para pedirle al usuario un número de mes (número del 1 hasta el 12)
    y mostrar por la terminal el nombre de dicho número de mes. Los pasos serían:
      3- A) Usar un prompt para pedirle al usuario un número entre 1 y 12
      3- B) Crear un array con los nombres de los meses del año
      3- C) Mostrar por la terminal el nombre del mes correcto
    4- El siguiente array [3, 8, 9, 4, 7] representa las notas de cada uno de los alumnos de un curso
      Teniendo en cuenta que aprueba con 7 o más, mostrar por la terminal CUANTOS de ellos aprobaron
    5- Repetir el ejercicio 4 pero permitiendo que el usuario pueda cargar (por medio de 5 prompts) cada
      uno de los valores del array
  Estructura base para los ejercicios

*/