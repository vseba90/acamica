// TODO
function Persona(nombre, billetera) {
    var billetera = billetera;
    this.nombre = nombre;

    this.getBilletera = function getBilleteraFn() {
        return billetera;
    }
    this.setBilletera = function setBilleteraFn(monto) {
        billetera = billetera + monto;
    }
}

Persona.prototype.enriquecer = function agregarPlata(monto) {
    this.setBilletera(monto);
}

function Cajero(saldo) {
    var saldo = saldo;

    this.getSaldo = function getSaldoFn() {
        return saldo;
    }
    this.setSaldo = function setSaldoFn(monto) {
        saldo = saldo - monto;
    }
}

Cajero.prototype.extraerDinero = function extraerDineroFn(monto) {
    this.setSaldo(monto);
    return monto;
}


const cajero = new Cajero(500);

Cajero.prototype.puedeDarDinero = function puedeDarDineroFn(monto){
    return this.getSaldo() >= monto;
}

const yo = new Persona("Cristhian", 1000);

yo.enriquecer(500);


if (cajero.puedeDarDinero(500)) {
    const plataDelCajero = cajero.extraerDinero(500);

    yo.enriquecer(plataDelCajero);

    console.log(yo.nombre, yo.getBilletera());
} else {
    console.log('El cajero no tiene esa plata disponible');
}