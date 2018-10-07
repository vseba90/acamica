var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
var paleta = document.getElementById('paleta');
var grilla = document.getElementById('grilla-pixeles');
var indicador = document.getElementById('indicador-de-color');
var colorPaleta = document.getElementsByClassName('color-paleta');

colorPersonalizado.addEventListener('change',
  (function () {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicador.style.backgroundColor = colorActual;
  })
);

function crearPaleta() {
  for (var i = 0; i < nombreColores.length; i++) {
    var color = document.createElement('div');
    color.classList.add('color-paleta');
    color.style.backgroundColor = nombreColores[i];
    color.addEventListener('click', function elegirColor(e) {
      indicador.style.backgroundColor = e.target.style.backgroundColor;
    });
    paleta.appendChild(color);
  }
}

function elegirColor(e) {}

function crearGrilla() {
  for (var i = 0; i < 1750; i++) {
    var pixel = document.createElement('div');
    grilla.appendChild(pixel);
    pixel.addEventListener('mousemove', pintar);
  }
}


function pintar(e) {
  if (mouseApretado === true) {
    e.target.style.backgroundColor = indicador.style.backgroundColor;
  }
}

var mouseApretado = false;

document.addEventListener('mousedown', clickApretado);
document.addEventListener('mouseup', clickLiberado);

function clickLiberado() {
  mouseApretado = false;
}

function clickApretado() {
  mouseApretado = true;
}

//Funciones para cargar a los distintos personajes:
$("#batman").click(function cargarBatman() {
  cargarSuperheroe(batman);
});

$("#wonder").click(function cargarWonder() {
  cargarSuperheroe(wonder);
});

$("#flash").click(function cargarFlash() {
  cargarSuperheroe(flash);
});

$("#invisible").click(function cargarInvisible() {
  cargarSuperheroe(invisible);
});

$("#guardar").click(function guardarPixel() {
  guardarPixelArt();
});

//Funcionalidad nueva para borrar toda la grilla:

$("#borrar").click(function borrarGrilla() {
  var grilla = $("#grilla-pixeles");
  var grillaPixeles = grilla.children();
  grillaPixeles.animate({
    "background-color": "white"
  }, 1000);
});

//Funcionalidad nueva para pintar todo el fondo de un color:

$("#balde").click(function pintarFondo() {
  var grilla = $("#grilla-pixeles");
  var grillaPixeles = grilla.children();
  grillaPixeles.css({
    "background-color": indicador.style.backgroundColor
  });
});

crearPaleta();
crearGrilla();