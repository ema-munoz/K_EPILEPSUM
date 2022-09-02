class obtenerNumero {
    constructor() {
        this.numero = document.getElementById('numero')
    }
    aumento() {
        if (this.numero.value === '') {
            this.numero.value = 1
        } else {
            this.numero.value = parseInt(this.numero.value) + 1
        }
    }
    
}

let numeros = new obtenerNumero()

window.onload = numeros.aumento()