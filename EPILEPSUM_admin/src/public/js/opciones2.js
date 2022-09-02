class opciones {
    constructor() {
        this.idRespuesta = document.getElementById("Nrespuesta")

        this.imagenRespuesta = document.getElementById("RespuestaImagen")
        this.videoRespuesta = document.getElementById("RespuestaVideo")

        /* File */
        this.imagenPreguntas = document.getElementById("imagenPreguntas")
        this.videoPreguntas = document.getElementById("videoPreguntas")
        this.imagenRespuestas = document.getElementById("imagenRespuestas")
        this.videoRespuestas = document.getElementById("videoRespuestas")

        /* Input */
        this.preguntaFinalImagen = document.getElementById("preguntaFinalImagen")
        this.preguntaFinalVideo = document.getElementById("preguntaFinalVideo")
        this.respuestaFinalImagen = document.getElementById("respuestaFinalImagen")
        this.respuestaFinalVideo = document.getElementById("respuestaFinalVideo")

        /* Preguntas Imagen */
        this.imagenPreguntaSi = document.getElementById("imagenPreguntasSi")
        this.imagenPreguntaNo = document.getElementById("imagenPreguntasNo")
        /* Preguntas Video */
        this.videoPreguntaSi = document.getElementById("videoPreguntasSi")
        this.videoPreguntaNo = document.getElementById("videoPreguntasNo")

        /* Respuestas Imagen */
        this.imagenRespuestaSi = document.getElementById("imagenRespuestaSi")
        this.imagenRespuestaNo = document.getElementById("imagenRespuestaNo")
        /* Respuestas Video */
        this.videoRespuestaSi = document.getElementById("videoRespuestaSi")
        this.videoRespuestaNo = document.getElementById("videoRespuestaNo")
    }

    seleccion() {
        /* Preguntas Imagen */
        if (this.imagenPreguntaSi.checked === true) {
            this.preguntaFinalImagen.value = ""
            this.preguntaFinalImagen.value = this.imagenPreguntaSi.value
            this.imagenPreguntas.style.display = "block"
            this.imagenPreguntaNo.checked = false
        }

        if (this.imagenPreguntaNo.checked === true) {
            this.preguntaFinalImagen.value = ""
            this.preguntaFinalImagen.value = this.imagenPreguntaNo.value
            this.imagenPreguntaSi.checked = false
            this.imagenPreguntas.style.display = "none"
        }

        /* Preguntas Video */
        if (this.videoPreguntaSi.checked === true) {
            this.preguntaFinalVideo.value = ""
            this.preguntaFinalVideo.value = this.videoPreguntaSi.value
            this.videoPreguntaNo.checked = false
            this.videoPreguntas.style.display = "block"
        }

        if (this.videoPreguntaNo.checked === true) {
            this.preguntaFinalVideo.value = ""
            this.preguntaFinalVideo.value = this.videoPreguntaNo.value
            this.videoPreguntaSi.checked = false
            this.videoPreguntas.style.display = "none"
        }

         /* Respuestas Imagen */
         if (this.imagenRespuestaSi.checked === true) {
            this.respuestaFinalImagen.value = ""
            this.respuestaFinalImagen.value = this.imagenRespuestaSi.value
            this.imagenRespuestas.style.display = "block"
            this.imagenRespuestaNo.checked = false
        }

        if (this.imagenRespuestaNo.checked === true) {
            this.respuestaFinalImagen.value = ""
            this.respuestaFinalImagen.value = this.imagenRespuestaNo.value
            this.imagenRespuestaSi.checked = false
            this.imagenRespuestas.style.display = "none"
        }

        /* Respuestas Video */
        if (this.videoRespuestaSi.checked === true) {
            this.respuestaFinalVideo.value = ""
            this.respuestaFinalVideo.value = this.videoRespuestaSi.value
            this.videoRespuestaNo.checked = false
            this.videoRespuestas.style.display = "block"
        }

        if (this.videoRespuestaNo.checked === true) {
            this.respuestaFinalVideo.value = ""
            this.respuestaFinalVideo.value = this.videoRespuestaNo.value
            this.videoRespuestaSi.checked = false
            this.videoRespuestas.style.display = "none"
        }
    }

    inicio() {
        this.preguntaFinalImagen.style.display = "none"
        this.preguntaFinalVideo.style.display = "none"
        this.respuestaFinalImagen.style.display = "none"
        this.respuestaFinalVideo.style.display = "none"

        /* File */
        this.imagenPreguntas.style.display = "none"
        this.videoPreguntas.style.display = "none"
        this.imagenRespuestas.style.display = "none"
        this.videoRespuestas.style.display = "none"

        if (this.idRespuesta.value === '') {
            this.idRespuesta.value = 1
        } else {
            this.idRespuesta.value = parseInt(this.idRespuesta.value) + 1
        }
    }
}

let opcion = new opciones

window.onload = opcion.inicio()
