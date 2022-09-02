const experiencias = {};

const baseDatosSQL = require("../Database/basededatos.sql");
const baseDatosORM = require("../Database/basededatos.orm");

experiencias.mostrar = async (req, res) => {
	const idMax = await baseDatosSQL.query(
		"SELECT MAX(idExperiencias) FROM experiencias"
	);
	res.render("experiencias/experienciasAgregar", {
		idMax,
	});
};

experiencias.agregar = async (req, res) => {
	const id = req.user.idUsuario;
	const { nombreExperiencia, experienciasDetallesExperiencias, experiencia } =
		req.body;
	const nuevoAgregamiento = {
		nombreExperiencia,
		usuarioIdUsuario: id,
	};
	const nuevaExperiencia = {
		experienciasDetallesExperiencias,
		experienciaIdExperiencias: experiencia,
	};
	await baseDatosORM.experiencias.create(nuevoAgregamiento);
	await baseDatosORM.detallesExperiencias.create(nuevaExperiencia);
	res.redirect("/experiencias/lista/" + id);
};

experiencias.lista = async (req, res) => {
	const experienciasId = req.params.id;
	const enlistar = await baseDatosSQL.query(
		"SELECT * FROM listaexperiencia WHERE usuarioIdUsuario = ?",
		[experienciasId]
	);
	res.render("experiencias/experienciasLista", {
		enlistar,
	});
};

experiencias.traerDatos = async (req, res) => {
	const experienciasId = req.params.id;
	const enlistar = await baseDatosSQL.query(
		"SELECT * FROM listaexperiencia WHERE idExperiencias = ?",
		[experienciasId]
	);
	res.render("experiencias/experienciasEditar", {
		enlistar,
	});
};

experiencias.editar = async (req, res) => {
	const experienciasId = req.params.id;
	const id = req.user.idUsuario;
	const { nombreExperiencia, experienciasDetallesExperiencias } = req.body;
	const actualizacion = {
		nombreExperiencia,
	};
	const nuevaExperiencia = {
		experienciasDetallesExperiencias,
	};
	await baseDatosORM.experiencias
		.findOne({
			where: {
				idExperiencias: experienciasId,
			},
		})
		.then((experiencias) => {
			experiencias.update(actualizacion);
		});
	await baseDatosORM.detallesExperiencias
		.findOne({
			where: {
				experienciaIdExperiencias: experienciasId,
			},
		})
		.then((detallesExperiencias) => {
			detallesExperiencias.update(nuevaExperiencia);
		});
	req.flash("success", "Datos Actulizados.");
	res.redirect("/experiencias/lista/" + id);
};

experiencias.eliminar = async (req, res) => {
	const experienciasId = req.params.id;
	const id = req.user.idUsuario;
	await baseDatosORM.experiencias.destroy({
		where: {
			idExperiencias: experienciasId,
		},
	});
	res.redirect("/experiencias/lista/" + id);
};

module.exports = experiencias;
