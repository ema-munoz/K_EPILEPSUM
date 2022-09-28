const mensajes={};

const baseDatosSQL = require("../Database/basededatos.sql");
const baseDatosORM = require("../Database/basededatos.orm");

mensajes.traerDatos = async (req, res) => {
	const enlistar = await baseDatosSQL.query(
		"SELECT * FROM mensajes"
	);
	res.render("Mensajes/mensajes", {enlistar});
};

mensajes.agregar = async (req, res) => {
	const creacionMensaje = req.params.id;
	const {
        idMensaje
	} = req.body;
	const nuevoMensaje = {
		idMensaje
	};
	await baseDatosORM.mensajes.create(nuevoMensaje);
	req.flash("sucess", "Conectado ahora.");
	res.redirect("/mensajes/lista/" + creacionMensaje);
};

module.exports = mensajes;