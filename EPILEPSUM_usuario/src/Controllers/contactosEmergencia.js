const contactosEmergencia = {};

const baseDatosSQL = require("../Database/basededatos.sql");
const baseDatosORM = require("../Database/basededatos.orm");

contactosEmergencia.mostrar = async (req, res) => {
	const familiar = await baseDatosSQL.query("SELECT * FROM familiares");
	res.render("ContactosEmergencias/contatosAgregar", { familiar });
};

contactosEmergencia.agregar = async (req, res) => {
	const contactosEmergenciaId = req.params.id;
	const {
		nombreContactosEmergencia,
		familiar,
		telefonoContactosEmergencia,
		celularContactosEmergencia,
	} = req.body;
	const nuevoAgregamiento = {
		nombreContactosEmergencia,
		telefonoContactosEmergencia,
		celularContactosEmergencia,
		pacienteIdPaciente: contactosEmergenciaId,
		familiareIdFamiliar: familiar,
	};
	await baseDatosORM.contactosEmergencia.create(nuevoAgregamiento);
	req.flash("success", "Datos Guardados...");
	res.redirect("/contactos/lista/" + contactosEmergenciaId);
};

contactosEmergencia.lista = async (req, res) => {
	const contactosEmergenciaId = req.params.id;
	const enlistar = await baseDatosSQL.query(
		"SELECT c.*, f.* FROM contactosEmergencia c JOIN familiares f ON f.idFamiliar = c.familiareIdFamiliar WHERE c.pacienteIdPaciente = ?",
		[contactosEmergenciaId]
	);
	res.render("ContactosEmergencias/contactosLista", { enlistar });
};

contactosEmergencia.traerDatos = async (req, res) => {
	const contactosEmergenciaId = req.params.id;
	const enlistar = await baseDatosSQL.query(
		"SELECT * FROM contactosEmergencia WHERE idContactosEmergencia = ?",
		[contactosEmergenciaId]
	);
	const familiar = await baseDatosSQL.query("SELECT * FROM familiares");
	res.render("ContactosEmergencias/contactosEditar", { enlistar, familiar });
};

contactosEmergencia.editar = async (req, res) => {
	const contactosEmergenciaId = req.params.id;
	const id = req.user.idPaciente;
	const {
		nombreContactosEmergencia,
		familiar,
		telefonoContactosEmergencia,
		celularContactosEmergencia,
	} = req.body;
	const actualizacion = {
		nombreContactosEmergencia,
		telefonoContactosEmergencia,
		celularContactosEmergencia,
		familiareIdFamiliar: familiar,
	};
	await baseDatosORM.contactosEmergencia
		.findOne({ where: { idContactosEmergencia: contactosEmergenciaId } })
		.then((contactos) => {
			contactos.update(actualizacion);
			req.flash("success", "Datos Actulizados.");
			res.redirect("/contactos/lista/" + id);
		});
};

contactosEmergencia.eliminar = async (req, res) => {
	const contactosEmergenciaId = req.params.id;
	const id = req.user.idPaciente;
	await baseDatosORM.contactosEmergencia.destroy({
		where: { idContactosEmergencia: contactosEmergenciaId },
	});
	res.redirect("/contactos/lista/" + id);
};

module.exports = contactosEmergencia;
