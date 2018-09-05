$ (document).ready (init);
function init () {
  console.log ('La página está lista para ser usada');
  inciarAcordeon ();
}

let encabezados = $ ('.js-encabezado');
console.log (encabezados.length);

function inciarAcordeon () {
  $('.js-encabezado').on ('click', encabezadoHandler);
}

function encabezadoHandler () {
  $(this).next ('.js-desplegable').slideToggle ();
}

function agregarleColor(){

}
