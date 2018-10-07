function Persona (nombre, dinerillo) {
  var plataDisponible = dinerillo;
​
  this.nombre = nombre;
​
  this.setPlataDisponible = function setPlataDisponibleFn (monto) {
    plataDisponible = plataDisponible + monto;
  }
​
  this.getPlataDisponible = function getPlataDisponibleFn () {
    return plataDisponible;
  }
}
​
Persona.prototype.agregarDinerillo = function agregarDinerilloFn (laMosca) {
  this.setPlataDisponible(laMosca);
}
​
const cris = new Persona('Crismona', 0);
​
const plata = parseInt(prompt('¿Cuánta plata queres sumarte a la billetera?'));
​
cris.agregarDinerillo(plata);
​
console.log('Ahora tenés', cris.getPlataDisponible());
​
// 1. ¿Qué está pasando?
// 2. ¿Cuál es el concepto "escondido"?
// 3. ¿Tiene ventaja hacerlo así? ¿Cuál?