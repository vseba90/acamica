console.log('Bucles - Ejercicio 1');

/* Hacer un programa para que el usuario ingrese dos números y luego el programa muestre por pantalla los números entre el menor y el mayor de ambos. Por ejemplo, si el usuario ingresa 3 y 15, se mostrarán los números entre el 3 y el 15; y si el usuario ingresa 25 y 8, se mostrarán los números entre el 8 y el 25 (siempre se emiten en orden creciente). */

/* var numeroPrimero = parseInt(prompt('Ingrese un numero.'));
var numeroSegundo = parseInt(prompt('Ingrese un segundo numero.'));
alert('Sus numeros ingresados son: ' + numeroPrimero + ' y ' + numeroSegundo);

function contador(numero1, numero2) {
    var numero1 = numeroPrimero;
    var numero2 = numeroSegundo;

    if (numero1 < numero2) {
        for (var i = numero1; i <= numero2; i++) {
            console.log(i);
        }
    } else if (numero2 < numero1) {
        for (var i = numero1; i >= numero2; i--) {
            console.log(i);
        }
    } else if (numero2 === numero1) {
       alert('Lo numero son iguales, es imposible generar un bucle');
    }
}

contador(numeroPrimero, numeroSegundo); */