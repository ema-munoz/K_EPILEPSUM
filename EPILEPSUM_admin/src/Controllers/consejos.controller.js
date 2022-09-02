const consejos = {};

const baseDatosSQL = require("../Database/basededatos.sql");
const baseDatosORM = require("../Database/basededatos.orm");

consejos.mostrar = async (req, res) => {
	const idMax = await baseDatosSQL.query(
		"SELECT MAX(idConsejo) FROM consejos"
	);
	res.render("consejos/consejosAgregar", {
		idMax,
	});
};

consejos.agregar = async (req, res) => {
	const id = req.user.idUsuario;
	const { nombreConsejo, consejosDetallesConsejo, consejos } = req.body;
	const nuevoAgregamiento = {
		nombreConsejo,
		usuarioIdUsuario: id,
	};
	const nuevoConsejo = {
		consejosDetallesConsejo,
		consejoIdConsejo: consejos,
	};
	await baseDatosORM.consejo.create(nuevoAgregamiento);
	await baseDatosORM.detallesConsejos.create(nuevoConsejo);
	res.redirect("/consejo/lista/" + id);
};

consejos.lista = async (req, res) => {
	const consejosId = req.params.id;
	const enlistar = await baseDatosSQL.query(
		"SELECT * FROM listaconsejos WHERE usuarioIdUsuario = ?",
		[consejosId]
	);
	res.render("consejos/consejosLista", {
		enlistar,
	});
};

consejos.traerDatos = async (req, res) => {
	const consejosId = req.params.id;
	const enlistar = await baseDatosSQL.query(
		"SELECT * FROM listaconsejos WHERE idConsejo = ?",
		[consejosId]
	);
	res.render("consejos/consejosEditar", {
		enlistar,
	});
};

consejos.editar = async (req, res) => {
	const consejosId = req.params.id;
	const id = req.user.idUsuario;
	const { nombreConsejo, consejosDetallesConsejo } = req.body;
	const actualizacion = {
		nombreConsejo,
	};
	const nuevoConsejo = {
		consejosDetallesConsejo,
	};
	await baseDatosORM.consejo
		.findOne({
			where: {
				idConsejo: consejosId,
			},
		})
		.then((consejos) => {
			consejos.update(actualizacion);
		});
	await baseDatosORM.detallesConsejos
		.findOne({
			where: {
				consejosDetallesConsejo: consejosId,
			},
		})
		.then((detallesConsejos) => {
			detallesConsejos.update(nuevoConsejo);
		});
	req.flash("success", "Datos Actulizados.");
	res.redirect("/consejo/lista/" + id);
};

consejos.eliminar = async (req, res) => {
	const consejosId = req.params.id;
	const id = req.user.idUsuario;
	await baseDatosORM.consejo.destroy({
		where: {
			idConsejo: consejosId,
		},
	});
	await baseDatosORM.detallesConsejos.destroy({
		where: {
			consejoIdConsejo: consejosId,
		},
	});
	res.redirect("/consejo/lista/" + id);
};

module.exports = consejos;
