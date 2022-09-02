class obtenerNumero{
    constructor(){
        this.numero = document.getElementById('numero')
        this.rol = document.getElementById('rol')
    }
    inicio(){
        this.rol.style.display = 'none'
    }
    aumento(){
        if(this.numero.value === ''){
            this.numero.value = 1
        }else{
            this.numero.value = parseInt(this.numero.value) + 1 
        }
    }
}

let numeros = new obtenerNumero()

window.onload = numeros.aumento()
window.onload = numeros.inicio()