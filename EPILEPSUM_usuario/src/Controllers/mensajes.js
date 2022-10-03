const mensajes = {};
const baseDatosSQL = require("../Database/basededatos.sql");
const baseDatosORM = require("../Database/basededatos.orm");

mensajes.mostrar = async (req, res) => {
	const id = req.user.idPaciente;
	const ids = req.params.id;
	const mensaje = await baseDatosSQL.query(
		"SELECT * FROM mensajeUsuario where pacienteIdPaciente = ?",
		[id]
	);
	const mensaje1 = await baseDatosSQL.query(
		"SELECT * FROM mensajeUsuario where pacienteIdPaciente = ?",
		[ids]
	);
	const usuario = await baseDatosSQL.query(
		"SELECT * FROM pacientes  where idPaciente = ?",
		[ids]
	);
	res.render("Mensajes/mensajes", { mensaje, mensaje1, usuario });
};

mensajes.agregar = async (req, res) => {
	const amigosId = req.params.id;
	const id = req.user.idPaciente;
	const { mensaje, fechaMensaje, horaMensaje } = req.body;

	const nuevoAmigo = {
		horaMensaje,
		fechaMensaje,
		mensajes: mensaje,
		pacienteIdPaciente: amigosId,
	};
	await baseDatosORM.mensajes.create(nuevoAmigo);

	req.flash("sucess", "Ahora amigos.");
	res.redirect("/chat/amigos/" + amigosId);
};

module.exports = mensajes;
