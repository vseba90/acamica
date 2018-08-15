console.log("main.js");

var proyectos = [
  [
    "Branding Xerokog",
    241,
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique facilis cupiditate molestiae! Doloremque quas aliquam odio facilis eius tempora? Vero perferendis fugit dicta assumenda eius autem modi debitis nam. Exercitationem.",
    [
      "https://avatars.dicebear.com/v2/male/acamica-cris.svg",
      "https://avatars.dicebear.com/v2/female/acamica-caro.svg"
    ],
    "20 Dec 2018",
    10000
  ],
  [
    "Título 2",
    340,
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique facilis cupiditate molestiae! Doloremque",
    [
      "https://avatars.dicebear.com/v2/male/acamica-teban.svg",
      "https://avatars.dicebear.com/v2/female/acamica-hello-world.svg"
    ],
    "10 Dec 2018",
    200
  ],
  [
    "Título 3",
    192,
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique facilis cupiditate molestiae!",
    [
      "https://avatars.dicebear.com/v2/male/teban.svg",
      "https://avatars.dicebear.com/v2/female/cris.svg"
    ],
    "19 Sep 2018",
    56000
  ]
];

var proyectosEl = document.getElementById("proyectos");

function dibujarCaja(proyecto) {
  /*
    <div class="column-two">
        <div class="box">
            <h2 class="black title">TITLE - <span># ID</span></h1>
            <p class="description description-with-bottom-space dimmed">DESCRIPTION</p>
            <div class="columns">
                <div class="column-one">
                    <p class="title">Developers</p>
                    <ul class="list">
                        <li>
                            <img src="https://avatars.dicebear.com/v2/male/acamica.svg" alt="" class="avatar-mini">
                        </li>
                    </ul>
                </div>
                <div class="column-one">
                    <p class="title">Deadline</p>
                    <p class="description">DEADLINE</p>
                </div>
                <div class="column-one">
                    <p class="title">Budget</p>
                    <p class="description">BUDGET</p>
                </div>
            </div>
        </div>
    </div>
  */
}

function dibujarProyectos(proyectosADibujar) {
  for (let index = 0; index < proyectosADibujar.length; index++) {
    const proyecto = proyectosADibujar[index];
    console.log("Dibujando", proyecto);

    dibujarCaja(proyecto);
  }
}

dibujarProyectos(proyectos);
