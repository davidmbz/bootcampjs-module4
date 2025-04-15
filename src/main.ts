import "./style.css";

// VARIABLES
let turno: number = 0;

const numeroTurno = document.getElementById("numero-turno");
const btnAnterior = document.getElementById("btn-anterior");
const btnSiguiente = document.getElementById("btn-siguiente");
const btnReset = document.getElementById("btn-reset");
const btnTurno = document.getElementById("btn-turno");
const inputTurno = document.getElementById("input-turno");

// DISPLAY TURNOS
function actualizarDisplay(): void {
  if (numeroTurno) {
    numeroTurno.textContent = turno.toString().padStart(2, "0");
  }
}

// BOTÓN TURNO ANTERIOR
if (btnAnterior instanceof HTMLButtonElement) {
  btnAnterior.addEventListener("click", () => {
    if (turno > 0) {
      turno--;
      actualizarDisplay();
    }
  });
}

// BOTÓN TURNO SIGUIENTE
if (btnSiguiente instanceof HTMLButtonElement) {
  btnSiguiente.addEventListener("click", () => {
    turno++;
    actualizarDisplay();
  });
}

// BOTÓN RESET
if (btnReset instanceof HTMLButtonElement) {
  btnReset.addEventListener("click", () => {
    turno = 0;
    actualizarDisplay();
  });
}

// TURNO MANUAL
if (
  btnTurno instanceof HTMLButtonElement &&
  inputTurno instanceof HTMLInputElement
) {
  btnTurno.addEventListener("click", () => {
    const nuevoTurno = parseInt(inputTurno.value, 10);
    if (typeof nuevoTurno === "number" && nuevoTurno >= 0) {
      turno = nuevoTurno;
      actualizarDisplay();
    } else {
      alert("Introduce un número válido mayor o igual a 0");
    }
  });
}

// INICIALIZAMOS
actualizarDisplay();
