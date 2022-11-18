class carrusel {
  constructor() {
    this.imagen1 = document.getElementById("img-1");
    this.imagen2 = document.getElementById("img-2");
    this.imagen3 = document.getElementById("img-3");
    this.imagen4 = document.getElementById("img-4");
    this.imagen5 = document.getElementById("img-5");
    this.imagen6 = document.getElementById("img-6");

    this.boton1 = document.getElementById("boton-1");
    this.boton2 = document.getElementById("boton-2");
    this.boton3 = document.getElementById("boton-3");
    this.boton4 = document.getElementById("boton-4");
    this.boton5 = document.getElementById("boton-5");
    this.boton6 = document.getElementById("boton-6");
  }

  inicio() {
    this.boton1.style.display = "none";
    this.boton2.style.display = "none";
    this.boton3.style.display = "none";
    this.boton4.style.display = "none";
    this.boton5.style.display = "none";
    this.boton6.style.display = "none";
  }

  animacion1() {
    setTimeout(imagen.animacion2, 5000);
    imagen.imagen1.style.display = "block";
    imagen.imagen2.style.display = "none";
    imagen.imagen3.style.display = "none";
    imagen.imagen4.style.display = "none";
    imagen.imagen5.style.display = "none";
    imagen.imagen6.style.display = "none";
  }

  animacion2() {
    setTimeout(imagen.animacion3, 5000);
    imagen.imagen1.style.display = "none";
    imagen.imagen2.style.display = "block";
    imagen.imagen3.style.display = "none";
    imagen.imagen4.style.display = "none";
    imagen.imagen5.style.display = "none";
    imagen.imagen6.style.display = "none";
  }

  animacion3() {
    setTimeout(imagen.animacion4, 5000);
    imagen.imagen1.style.display = "none";
    imagen.imagen2.style.display = "none";
    imagen.imagen3.style.display = "block";
    imagen.imagen4.style.display = "none";
    imagen.imagen5.style.display = "none";
    imagen.imagen6.style.display = "none";
  }

  animacion4() {
    setTimeout(imagen.animacion1, 5000);
    imagen.imagen1.style.display = "none";
    imagen.imagen2.style.display = "none";
    imagen.imagen3.style.display = "none";
    imagen.imagen4.style.display = "block";
    imagen.imagen5.style.display = "none";
    imagen.imagen6.style.display = "none";
  }

  animacion5() {
    setTimeout(imagen.animacion1, 5000);
    imagen.imagen1.style.display = "none";
    imagen.imagen2.style.display = "none";
    imagen.imagen3.style.display = "none";
    imagen.imagen4.style.display = "none";
    imagen.imagen5.style.display = "block";
    imagen.imagen6.style.display = "none";
  }

  animacion6() {
    setTimeout(imagen.animacion1, 5000);
    imagen.imagen1.style.display = "none";
    imagen.imagen2.style.display = "none";
    imagen.imagen3.style.display = "none";
    imagen.imagen4.style.display = "none";
    imagen.imagen5.style.display = "none";
    imagen.imagen6.style.display = "block";
  }
}

var imagen = new carrusel();

window.onload = imagen.inicio();

setTimeout(imagen.animacion1, 5000);
