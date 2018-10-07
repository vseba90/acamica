function Persona(nombre, billetera){
    this.nombre = nombre;
    this.billetera = billetera;
}

Persona.prototype.enriquecer = Enriquecer;

function Cajero(nombreBanco, saldoDisponible){
    this.nombreBanco = nombreBanco;
    this.saldoDisponible = saldoDisponible;
};

var seba = new Persona('Sebastian Villanueva', 35000);
function Enriquecer(monto){
    this.billetera = this.billetera + monto;
}
seba.enriquecer(500)
console.log('Tu saldo actual es ' + seba.billetera);
/* 

Cajero.prototype.cajeroTieneGuita(monto){
    // Devuelve true si el saldo disponible del cajero es mayor o igual al monto que se indica
}

Cajero.prototype.personaTieneGuita(nombre, monto){
    //Devuelve true si el saldo de la persona en el banco es mayor o igual al monto que se indica. Cómo todavía no vamos a trabajar la idea de un banco, siempre devuelve true
}

Cajero.prototype.cajeroPuedeDarGuita(nombre, monto){
    //Devuelve verdadero o falso si la persona puede extraer la cantidad de dinero especificada usando los 2 métodos anteriores
}

Cajero.prototype.descontarGuitaCajero(monto){
   // Disminuye el saldo disponible del cajero por el monto indicado
}

Cajero.prototype.descontarGuitaPersona(persona, monto){
    // Disminuye el saldo de la persona en el banco por la cantidad especificada en el monto. Cómo todavía no vamos a trabajar la idea de un banco, el método va a estar vacío
}

Cajero.prototype.entregarGuita(persona, monto){
    // Descuenta el saldo disponible del cajero y de la persona en el banco usando los 2 métodos anteriores. Retorna el monto
}

 */


