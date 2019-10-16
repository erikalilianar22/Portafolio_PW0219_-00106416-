var btn = document.querySelectorAll(".btn");

function cambiar(numero) {
  for (i = 0; i < btn.length; i++) {
    btn[i].classList.remove("op");
    if (numero == 1) {
      btn[i].classList.add("close");
      btn[0].classList.remove("close");
      btn[0].classList.add("op");
    }
    if (numero == 2) {
      btn[i].classList.add("close");
      btn[1].classList.remove("close");
      btn[1].classList.add("op");
    }
    if (numero == 3) {
      btn[i].classList.add("close");
      btn[2].classList.remove("close");
      btn[2].classList.add("op");
    }
    if (numero == 4) {
      btn[i].classList.add("close");
      btn[3].classList.remove("close");
      btn[3].classList.add("op");
    }
  }
}
