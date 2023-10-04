const dia = document.getElementById("dia");
const hora = document.getElementById("hora");
const minuto = document.getElementById("Minuto");
const segundo = document.getElementById("segundo");

const lancmento = "17 oct 2023";

function countDown() {
  const dataLanc = new Date(lancmento);
  const hoje = new Date();

  const segTotal = (dataLanc - hoje) / 1000;

  const finalDias = math.floor(segTotal / 60 / 60 / 24);
  const finalHoras = math.floor(segTotal / 60 / 60) % 24;
  const finalMinutos = math.floor(segTotal / 60) % 60;
  const finalsegundos = math.floor(segTotal) % 60;

  dia.innerHTML = finalDias;
  hora.innerHTML = formatoTempo(finalHoras);
  minuto.innerHTML = formatoTempo(finalMinutos);
  segundo.innerHTML = formatoTempo(finalsegundos);
}
function formatoTempo(tempo) {
  return tempo < 10 ? `0${tempo}` : tempo;
}
countDown();
setInterval(countDown, 1000);
