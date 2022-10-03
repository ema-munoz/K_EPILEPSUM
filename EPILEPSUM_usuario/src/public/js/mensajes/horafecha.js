class fecha {
	constructor() {
		this.fecha = document.getElementById("fechas");
		this.hora = document.getElementById("horas");
	}
	obtencion() {
		const tiempoTranscurrido = Date.now();
		const hoy = new Date(tiempoTranscurrido);
		this.fecha.value = hoy.toLocaleDateString();

		this.hora.value = hoy.toLocaleTimeString();
	}
}

let fechas = new fecha();
window.onload = fechas.obtencion();
