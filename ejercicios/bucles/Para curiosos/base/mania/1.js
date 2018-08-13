console.log('Mania - Ejercicio 1');

/* Hacer un programa para ingresar por teclado nombre, sueldo y la antigüedad de los 5 empleados de una empresa. Cada registro está compuesto por los siguientes datos:
Nombre del empleado (string)
Sueldo (número)
Antigüedad (número)

Se pide determinar e informar:
El nombre es el número del empleado con mayor sueldo y cual es su antigüedad. 
La antigüedad promedio de los empleados con sueldo mayor a $3500. */



function empleados() {
    var empresa = [];
    var nombre;
    var sueldo;
    var antiguedad;
    var listaMayor;
    for (var i = 0; i < 2; i++) {
        alert('Agregue el empleado ' + (i + 1));
        nombre = prompt('Ingrese nombre del empleado');
        sueldo = parseInt(prompt('Ingrese el sueldo'));
        antiguedad = parseInt(prompt('Ingrese su antigüedad'));

        empresa.push([nombre, sueldo, antiguedad]);
        listaMayor = Math.max(...empresa[i]);
        /*  listaMayor = empresa.indexOf(1); */
         console.log(listaMayor);
     
        console.table(empresa);
    }
   
}

empleados()