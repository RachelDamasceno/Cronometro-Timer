let iniciar = document.querySelector("#iniciar");
let parar = document.querySelector("#parar");
let zerar = document.querySelector("#zerar");
let tela = document.querySelector("#tela");

let min = 0;
let sec = 0;
let hora = 0;
let ok = false;

iniciar.addEventListener("click", function (event) {
  if (!ok) {
    ok = true;
    // A cada 1000 milisegundo a função Iniciar é chamada
    contador = setInterval(Iniciar, 1000);
  }
});

zerar.addEventListener("click", function (event) {
  console.log("Contador zerou");
  clearInterval(contador);
  min = 0;
  sec = 0;
  hora = 0;
  ok = false;
  tela.innerHTML = `${hora < 10 ? "0" + hora : hora}:${
    min < 10 ? "0" + min : min
  }:${sec < 10 ? "0" + sec : sec}`;
  console.log(ok);
});

parar.addEventListener("click", function (event) {
  clearInterval(contador);
  console.log("Contador parou");

  ok = false;
  console.log(ok);
});

function Iniciar() {
  if (ok) {
    sec++;

    if (sec === 60) {
      sec = 0;
      min++;
    }
    if (min === 60) {
      min = 0;
      hora++;
    }
    // Adicionar 0 na frente do numero caso ele seja menor que 10, se não fica normal.
    tela.innerHTML = `${hora < 10 ? "0" + hora : hora}:${
      min < 10 ? "0" + min : min
    }:${sec < 10 ? "0" + sec : sec}`;
  }
}
