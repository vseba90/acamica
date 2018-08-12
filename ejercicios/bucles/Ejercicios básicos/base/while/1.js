console.log('Ciclo While - Ejercicio 1');

var numeroUsuario;

while(numeroUsuario !== 0){
    var numeroUsuario = parseInt(prompt('Ingresa un numero pap'));
    if(numeroUsuario === 0){
        alert('Este es el numero que esperaba');
    }
}