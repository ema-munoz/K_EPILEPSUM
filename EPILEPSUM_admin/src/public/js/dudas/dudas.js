class noHayArchivo {
    constructor() {
        this.imagenPregunta = document.getElementById("imagenPregunta")
        this.videoPregunta = document.getElementById("videoPregunta")
        this.imagenCambioPregunta = document.getElementById("iconImagenPregunta")
        this.videoCambioPregunta = document.getElementById("iconVideoPregunta")
        this.imagenSubidaPregunta = document.getElementById("imagenSubidaPregunta")
        this.videoSubidoPregunta = document.getElementById("videoSubidoPregunta")

        this.imagenRespuesta = document.getElementById("imagenRespuesta")
        this.videoRespuesta = document.getElementById("videoRespuesta")
        this.imagenCambioRespuesta = document.getElementById("iconImagenRespuesta")
        this.videoCambioRespuesta = document.getElementById("iconVideoRespuesta")
        this.imagenSubidaRespuesta = document.getElementById("imagenSubidaRespuesta")
        this.videoSubidoRespuesta = document.getElementById("videoSubidoRespuesta")
    }

    inicio() {
        this.imagenPregunta.style.display = "none"
        this.videoPregunta.style.display = "none"
        this.imagenRespuesta.style.display = "none"
        this.videoRespuesta.style.display = "none"
        
        dudas.mostrarImagenPregunta()
        dudas.mostrarVideoPregunta()
        dudas.mostrarImagenRespuesta()
        dudas.mostrarVideoRespuesta()
    }

    mostrarImagenPregunta() {
        if (dudas.imagenSubidaPregunta.src.length == 42) {
            this.imagenCambioPregunta.style.display = "block"
        } else {
            if (this.imagenSubidaPregunta.src.length > 42) {
                this.imagenCambioPregunta.style.display = "none"
                this.imagenPregunta.style.display = "block"
            }
        }
    }

    mostrarVideoPregunta() {
        if (dudas.videoSubidoPregunta.src.length == 44) {
            this.videoCambioPregunta.style.display = "block"
        } else {
            if (this.videoSubidoPregunta.src.length > 44) {
                this.videoCambioPregunta.style.display = "none"
                this.videoPregunta.style.display = "block"
            }
        }
    }

    mostrarImagenRespuesta() {
        if (dudas.imagenSubidaRespuesta.src.length == 43) {
            this.imagenCambioRespuesta.style.display = "block"
        } else {
            if (this.imagenSubidaRespuesta.src.length > 43) {
                this.imagenCambioRespuesta.style.display = "none"
                this.imagenRespuesta.style.display = "block"
            }
        }
    }

    mostrarVideoRespuesta() {
        if (dudas.videoSubidoRespuesta.src.length == 45) {
            this.videoCambioRespuesta.style.display = "block"
        } else {
            if (this.videoSubidoRespuesta.src.length > 45) {
                this.videoCambioRespuesta.style.display = "none"
                this.videoRespuesta.style.display = "block"
            }
        }
    }
}

let dudas = new noHayArchivo

window.onload = dudas.inicio()
