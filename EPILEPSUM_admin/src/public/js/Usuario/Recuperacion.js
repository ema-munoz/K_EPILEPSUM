class botones{
    constructor(){
        this.visto = document.getElementById ("visto")
        this.equis = document.getElementById ("equis")
        this.visto2 = document.getElementById ("visto2")
        this.equis2 = document.getElementById ("equis2")

        this.password = document.getElementById ("password")
        this.password2 = document.getElementById ("password2")

        this.mensaje = document.getElementById ("mensaje")
    }

    inicio(){
        this.equis.style.display = "none"
        this.equis2.style.display = "none"
    }
    
    cambio (){
        if (this.password.type == "password") {
            this.password.type = "text"
            this.visto.style.display = "none"
            this.equis.style.display = "block"
        } 
    }

    cambio2 (){
        if (this.password.type == "text") {
            this.password.type = "password"
            this.visto.style.display = "block"
            this.equis.style.display = "none"
        }
    }

    cambio3 (){
        if (this.password2.type == "password") {
            this.password2.type = "text"
            this.visto2.style.display = "none"
            this.equis2.style.display = "block"
        } 
    }

    cambio4 (){
        if (this.password2.type == "text") {
            this.password2.type = "password"
            this.visto2.style.display = "block"
            this.equis2.style.display = "none"
        }
    }

    verificacion (){
        if (this.password2.value === this.password.value) {
            this.mensaje.innerHTML = " "
            this.mensaje.innerHTML = "Las contraseñas son iguales."
        } else {
            this.mensaje.innerHTML = " "
            this.mensaje.innerHTML = "Las contraseñas no coinciden."
        }
    }

}

var boton = new botones ()

window.onload = boton.inicio ()
