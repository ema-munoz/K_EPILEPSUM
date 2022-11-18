/*
$(".toggle").click(function () {
    $(".formulario").animate({
        height:"toggle",
        "padding-top" : "toggle",
        "padding-bottom" : "toggle",
        opacity : "toggle"
    }, "slow");
});
*/

class botones {
  constructor() {
    this.visto = document.getElementById("visto");
    this.equis = document.getElementById("equis");

    this.password = document.getElementById("passIntxt");
  }

  inicio() {
    this.equis.style.display = "none";
  }

  cambio() {
    if (this.password.type == "password") {
      this.password.type = "text";
      this.visto.style.display = "none";
      this.equis.style.display = "block";
    }
  }

  cambio2() {
    if (this.password.type == "text") {
      this.password.type = "password";
      this.visto.style.display = "block";
      this.equis.style.display = "none";
    }
  }
}

var boton = new botones();

window.onload = boton.inicio();
