const mensajes = {};

const baseDatosSQL = require("../Database/basededatos.sql");
const baseDatosORM = require("../Database/basededatos.orm");

mensajes.mostrar = async (req, res) => {
	const enlistar = await baseDatosSQL.query(
		"SELECT DISTINCT * FROM mensajes"
	);
	res.render("Mensajes/mensajes", { enlistar });
};

mensajes.agregar = async (req, res) => {
	const amigosId = req.params.id;
	const { idMensaje } = req.body;
	const nuevoAmigo = {
		idMensaje,
	};
	await baseDatosORM.amigos.create(nuevoAmigo);
	req.flash("sucess", "Ahora amigos.");
	res.redirect("/amigos/lista/" + amigosId);
};

module.exports = mensajes;