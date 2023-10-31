let hr = mn = sg = ms = "0" + 0;
let iniciartiempo;

const bonoINI = document.querySelector(".iniciar");
const bonoDET = document.querySelector(".detener");
const bonoREI = document.querySelector(".reiniciar");

document.addEventListener("DOMContentLoaded", () => {
  bonoINI.addEventListener("click", iniciar);
  bonoDET.addEventListener("click", detener);
  bonoREI.addEventListener("click", reiniciar);
});

function iniciar() {
  bonoINI.classList.add("on");

  iniciartiempo = setInterval(() => {
    ms++;
    ms = ms < 10 ? "0" + ms : ms;
    if (ms == 100) {
      sg++;
      sg = sg < 10 ? "0" + sg : sg;
      ms = "00";
    }
    if (sg == 60) {
      mn++;
      mn = mn < 10 ? "0" + mn : mn;
      sg = "00";
    }
    if (mn == 60) {
      hr++;
      hr = hr < 10 ? "0" + hr : hr;
      mn = "00";
    }

    ingresarVALOR();
  }, 10);
}

function detener() {
  bonoDET.classList.remove("on");
  clearInterval(iniciartiempo);

}

function reiniciar() {
  bonoINI.classList.remove("on");
  clearInterval(iniciartiempo);
  hr = mn = sg = ms = "0" + 0;
  ingresarVALOR();
}

function ingresarVALOR() {
  document.querySelector('.MILISEGUNDO').innerHTML = ms;
  document.querySelector('.SEGUNDOS').innerHTML = sg;
  document.querySelector('.MINUTO').innerHTML = mn;
  document.querySelector('.HORA').innerHTML = hr;
}
