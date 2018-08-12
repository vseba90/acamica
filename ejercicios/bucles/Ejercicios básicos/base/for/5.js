console.log('Ciclo For - Ejercicio 5');

var numero = prompt('Ingrese un numero');
var numeroUsuario = parseInt(numero);
var total = 0;
for(var i = 0; i <= numeroUsuario; i++){
    total += i;
}
console.log(total)