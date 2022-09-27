const solicitudes = {};

const baseDatosSQL = require("../Database/basededatos.sql");
const baseDatosORM = require("../Database/basededatos.orm");

solicitudes.mostrar = async (req, res) => {
	const enlistar = await baseDatosSQL.query(
		"SELECT DISTINCT * FROM solicitudamigo"
	);
	res.render("Solicitudes/solicitudes", { enlistar });
};

solicitudes.agregar = async (req, res) => {
	const amigosId = req.params.id;
	const { idSolicitud } = req.body;
	const nuevoAmigo = {
		idSolicitud,
	};
	await baseDatosORM.amigos.create(nuevoAmigo);
	req.flash("sucess", "Ahora amigos.");
	res.redirect("/amigos/lista/" + amigosId);
};

solicitudes.eliminar = async (req, res) => {
	const solicitudesId = req.params.id;
	const id = req.user.idPaciente;
	await baseDatosORM.amigos.destroy({
		where: { idSolicitud: solicitudesId },
	});
	req.flash("sucess", "Solicitud Eliminada.");
	res.redirect("/amigos/lista/" + id);
};

module.exports = solicitudes;
