document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".tempo-menu button");
  const iniciar = document.querySelector("#iniciar");
  const parar = document.querySelector("#parar");
  const zerar = document.querySelector("#zerar");
  const tela = document.querySelector("#tela");

  let min = 0;
  let sec = 0;
  let hora = 0;
  let ok = false;
  let contador;
  var noSleep = new NoSleep();

  // Função para marcar o botão como selecionado
  function selecionarBotao(button) {
    buttons.forEach((b) => b.classList.remove("selected"));
    button.classList.add("selected");
  }

  iniciar.addEventListener("click", function () {
    if (!ok) {
      ok = true;
      contador = setInterval(Iniciar, 1000);
      selecionarBotao(iniciar);
    }
    document.addEventListener(
      "click",
      function enableNoSleep() {
        document.removeEventListener("click", enableNoSleep, false);
        noSleep.enable();
      },
      false
    );
  });

  parar.addEventListener("click", function () {
    clearInterval(contador);
    ok = false;
    selecionarBotao(parar);
    noSleep.disable();
  });

  zerar.addEventListener("click", function () {
    clearInterval(contador);
    min = 0;
    sec = 0;
    hora = 0;
    ok = false;
    tela.innerHTML = `${hora < 10 ? "0" + hora : hora}:${
      min < 10 ? "0" + min : min
    }:${sec < 10 ? "0" + sec : sec}`;
    selecionarBotao(zerar);
    noSleep.disable();
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

      tela.innerHTML = `${hora < 10 ? "0" + hora : hora}:${
        min < 10 ? "0" + min : min
      }:${sec < 10 ? "0" + sec : sec}`;
    }
  }
});
