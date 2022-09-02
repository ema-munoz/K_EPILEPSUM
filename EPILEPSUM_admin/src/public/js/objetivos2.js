class objetivo {
    constructor() {
        this.contenedor = document.getElementById('listaObjetivos')
        this.numero = document.getElementById('numeros')
        this.unico = document.getElementById('Unico')
    }
    
    crear() {
        if (parseInt(this.numero.value) === 1) {
            this.unico.style.display = 'block'
        } else {
            if (this.numero.value <= 4) {
                for (let i = 0; i < parseInt(this.numero.value); i++) {
                    let input = document.createElement('textarea')
                    input.setAttribute('type', 'text')
                    input.name = 'objetivos1'
                    input.id = 'extras'
                    this.contenedor.appendChild(input)
                }
            } else {
                alert('Este campo permite desde 1 a 4 nuevas respuestas')
            }
        }
    }

    inicio() {
        this.unico.style.display = 'none'
    }
}

let objetivo1 = new objetivo

window.onload = objetivo1.inicio()
