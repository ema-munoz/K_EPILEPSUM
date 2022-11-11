class objetivo {
	constructor() {
		this.contenedor = document.getElementById("listaObjetivos");
		this.numero = document.getElementById("numeros");
		this.unico = document.getElementById("Unico");
	}
	crear() {
		if (parseInt(this.numero.value) === 1) {
			this.unico.style.display = "block";
		} else {
			if (parseInt(this.numero.value) > 1) {
				if (parseInt(this.numero.value) <= 4) {
					for (let i = 0; i < parseInt(this.numero.value); i++) {
						let input = document.createElement("textarea");
						input.setAttribute("type", "text");
						input.name = "objetivos";
						input.id = "extras";
						this.contenedor.appendChild(input);
					}
				} else {
					alert("Este campo permite desde 1 a 4 objetivos");
				}
			}
		}
	}

	inicio() {
		this.unico.style.display = "none";
	}
}

let objetivos = new objetivo();

window.onload = objetivos.inicio();
