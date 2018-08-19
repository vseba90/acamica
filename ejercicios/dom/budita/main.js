/*
    Temario:

        1- Crear nodos de DOM desde JS
        2- Agregarle contenido a un nodo de DOM desde JS
        3- Trabajar con las clases de CSS de un nodo de DOM
        4- Agregarlo al documento para que sea visible
*/


/*  <div class="buddha">
        <span class="tail"></span>
        <span class="legs"></span>
        <div class="head">
            <span class="ears right"></span>
            <span class="ears left"></span>
            <span class="circle"></span>
            <span class="eye right"></span>
            <span class="eye left"></span>
            <span class="mouth"></span>
        </div>
        <span class="hand"></span>
    </div>
    <span class="shadow"></span>  */
var tituloElement = document.getElementById('titulo');
tituloElement.textContent = 'Bud@';

var buddhaContainerEl = document.getElementById('buddha-container');


// Creo elementos
var buddha = document.createElement('div');
var head = document.createElement('div');
var earsLeft = document.createElement('span');
var earsRight = document.createElement('span');
var eyeLeft = document.createElement('span');
var eyeRight = document.createElement('span');
var mouth = document.createElement('span');
var circle = document.createElement('span');
var tail = document.createElement('span');
var legs = document.createElement('span');
var hand = document.createElement('span');
var shadow = document.createElement('span');

earsLeft.classList.add('ears', 'left');
earsRight.classList.add('ears', 'right');
eyeLeft.classList.add('eye', 'left');
eyeRight.classList.add('eye', 'right');
circle.classList.add('circle');
mouth.classList.add('mouth');
buddha.classList.add('buddha');
head.classList.add('head');
tail.classList.add('tail', 'random');
legs.classList.add('legs', 'random');
hand.classList.add('hand');
shadow.classList.add('shadow');


buddhaContainerEl.appendChild(buddha);
buddha.appendChild(tail);
buddha.appendChild(legs)
buddha.appendChild(head);
head.appendChild(earsLeft);
head.appendChild(earsRight);
head.appendChild(circle);
head.appendChild(eyeLeft);
head.appendChild(eyeRight);
head.appendChild(mouth);
buddha.appendChild(hand);
buddhaContainerEl.appendChild(shadow);