//Declaración de variables
const nombreUsuario = "Sebastian";
var saldoCuenta = 30000;
var limiteExtraccion = 3000;
var codigoSeguridad = 1234;

var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var limite = parseInt(prompt('¿Desea modificar el limite de extración?'));
    if (!limite) { return; }
    limiteExtraccion = limite;
    actualizarLimiteEnPantalla();
    alert('Su nuevo limite de extraccion es: $' + limiteExtraccion);
}

function extraerDinero() {
    var saldoAnterior = saldoCuenta;
    var extraer = parseInt(prompt('¿Queres extraer dinero de tu cuenta?'));
    if (!extraer) { return; };
    if (saldoInsuficiente(extraer)) {
        alert("No hay saldo disponible en tu cuenta para extraer esas cantidad de dinero");
        return;
    }
    if (saldoLimite(extraer)) {
        alert("La cantidad de dinero que deseas extraer es mayor a tu límite de extracción");
        return;
    }
    if (saldoMultiplo(extraer)) {
        alert('Solo puedes extraer billetes de 100.');
        return;
    }
    retiroDinero(extraer);

    actualizarSaldoEnPantalla();
    alert('Has Depositado: $' + extraer + '\n' + 'Saldo Anterior: $' + saldoAnterior + '\n' + 'Saldo Actual: $' + saldoCuenta);
}

function depositarDinero() {
    var saldoAnterior = saldoCuenta;
    var depositar = parseInt(prompt('¿Queres extraer dinero de tu cuenta?'));
    if (!depositar) { return; };
    adicionarDinero(depositar);
    actualizarSaldoEnPantalla();
    alert('Has Depositado: $' + depositar + '\n' + 'Saldo Anterior: $' + saldoAnterior + '\n' + 'Saldo Actual: $' + saldoCuenta);
}

function pagarServicio() {
    const agua = { servicio: 'Agua', precio: 350 };
    const telefono = { servicio: 'Teléfono', precio: 425 };
    const luz = { servicio: 'Luz', precio: 210 };
    const internet = { servicio: 'Internet', precio: 570 };

    var saldoAnterior = saldoCuenta;
    var pagar = parseInt(prompt('Pagar los servicios: \n' + '1. ' + agua.servicio + ': $' + agua.precio + ' \n' + '2. ' + telefono.servicio + ': $' + telefono.precio + ' \n' + '3. ' + luz.servicio + ': $' + luz.precio + ' \n' + '4. ' + internet.servicio + ': ' + internet.precio + ' \n'));
    if (pagar > saldoAnterior) {
        alert('No hay suficiente saldo en tu cuenta para pagar el servicio');
        return;
    }
    switch (pagar) {
        case 1:
            saldoCuenta = saldoCuenta - agua.precio;
            alert('Has pagado el servicio de ' + agua.servicio + '\n' + 'Saldo Anterior: $' + saldoAnterior + '\n' + 'Saldo descontado: $' + agua.precio + '\n' + 'Saldo Actual: $' + saldoCuenta);
            break;
        case 2:
            saldoCuenta = saldoCuenta - telefono.precio;
            alert('Has pagado el servicio de ' + telefono.servicio + '\n' + 'Saldo Anterior: $' + saldoAnterior + '\n' + 'Saldo descontado: $' + telefono.precio + '\n' + 'Saldo Actual: $' + saldoCuenta);
            break;
        case 3:
            saldoCuenta = saldoCuenta - luz.precio;
            alert('Has pagado el servicio de ' + luz.servicio + '\n' + 'Saldo Anterior: $' + saldoAnterior + '\n' + 'Saldo descontado: $' + luz.precio + '\n' + 'Saldo Actual: $' + saldoCuenta);
            break;
        case 4:
            saldoCuenta = saldoCuenta - internet.precio;
            alert('Has pagado el servicio de ' + internet.servicio + '\n' + 'Saldo Anterior: $' + saldoAnterior + '\n' + 'Saldo descontado: $' + internet.precio + '\n' + 'Saldo Actual: $' + saldoCuenta);
            break;
        default:
            alert('Ninguna de los servicios fue seleccionado')

    }
    actualizarSaldoEnPantalla();

}

function transferirDinero() {
    var transferir = parseInt(prompt('¿Qué monto desea transferir?'));
    if (transferir > saldoCuenta) {
        alert('No hay suficiente saldo en tu cuenta para realizar la transferencia');
        return;
    }
    if (!transferir) { return; }
    var codigoAsociado = parseInt(prompt('Número de Cuenta'));
    if (codigoAsociado === cuentaAmiga1 || codigoAsociado === cuentaAmiga2) {
        saldoCuenta = saldoCuenta - transferir;
    } else {
        alert('El numero de cuenta no existe');
    }

    actualizarSaldoEnPantalla();
    alert('Se han transferido: $' + transferir + '\n' + 'Cuenta Destino: ' + codigoAsociado);
}

function iniciarSesion() {
    var clave = parseInt(prompt('Ingrese su codigo de seguridad (' + codigoSeguridad + ')'));
    if (clave === codigoSeguridad) {
        alert('Bienvenido ' + nombreUsuario + ' ya puedes empezar a realizar operaciones');
    } else {
        alert('Codigo Incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad');
        saldoCuenta = 0;
    }
}

function retiroDinero(extraer) {
    return saldoCuenta -= extraer;
}
function adicionarDinero(depositar) {
    return saldoCuenta += depositar;
}
function saldoInsuficiente(extraer) {
    return extraer > saldoCuenta;
}
function saldoLimite(extraer) {
    return extraer > limiteExtraccion;
}
function saldoMultiplo(extraer) {
    return !(extraer % 100 === 0);
}
//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}