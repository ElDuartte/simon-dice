const celeste = document.getElementById("celeste");
const violeta = document.getElementById("violeta");
const naranja = document.getElementById("naranja");
const verde = document.getElementById("verde");
const btnEmpezar = document.getElementById("btnEmpezar");

class Juego {
  constructor() {
    this.iniciarlizar();
  }
  iniciarlizar() {
    btnEmpezar.classList.add("hide");
  }
}

function empezarJuego() {
  var juego = new Juego();
}
