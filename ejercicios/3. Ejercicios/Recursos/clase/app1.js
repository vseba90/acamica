var cris = ['Cristian', 28, true];
var facu = ['Facundo', 28, true];
var roque = ['Roqueford', 28, true];

function mostrarPersona(persona) {
    console.log('Nombre:    ' + persona[0]);
    console.log('Edad:      ' + persona[1]);
    console.log('Cremonero: ' + persona[2]);
    console.log('-----');
} 

// Actividad: usar la función mostrarPersona para ver en la consola la información de los alumnos
mostrarPersona(cris);
mostrarPersona(facu);
mostrarPersona(roque);