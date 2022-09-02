const contenido = {};

const baseDatosSQL = require("../Database/basededatos.sql");
const baseDatosORM = require("../Database/basededatos.orm");

contenido.mostrar = async (req, res) => {
	const idMax = await baseDatosSQL.query(
		"SELECT MAX(idContenido) FROM contenidos"
	);
	res.render("contenido/contenidoAgregar", {
		idMax,
	});
};

contenido.agregar = async (req, res) => {
	const contenidoId = req.user.idUsuario;
	const {
		contenidos,
		nombreContenido,
		descripcionDetalleContenido,
		/*imagenDetalleContenido,
        videoDetalleContenido*/
	} = req.body;
	const nuevoAgregamiento = {
		nombreContenido,
		usuarioIdUsuario: contenidoId,
	};
	const nuevoContenido = {
		descripcionDetalleContenido,
		/*imagenDetalleContenido,
        videoDetalleContenido*/
		contenidoIdContenido: contenidos,
	};
	await baseDatosORM.contenido.create(nuevoAgregamiento);
	await baseDatosORM.detalleContenido.create(nuevoContenido);
	res.redirect("/contenido/lista/" + contenidoId);
};

contenido.lista = async (req, res) => {
	const contenidoId = req.user.idUsuario;
	const enlistar = await baseDatosSQL.query(
		"SELECT * FROM listaContenido WHERE usuarioIdUsuario = ?",
		[contenidoId]
	);
	res.render("contenido/contenidoLista", {
		enlistar,
	});
};

contenido.traerDatos = async (req, res) => {
	const contenidoId = req.params.id;
	const id = req.user.idUsuario;
	const enlistar = await baseDatosSQL.query(
		"SELECT * FROM listaContenido WHERE idContenido = ?",
		[contenidoId]
	);
	res.render("contenido/contenidoEditar", {
		enlistar,
	});
};

contenido.editar = async (req, res) => {
	const contenidoId = req.params.id;
	const id = req.user.idUsuario;
	const {
		nombreContenido,
		descripcionDetalleContenido,
		/*imagenDetalleContenido,
        videoDetalleContenido*/
	} = req.body;
	const actualizacion = {
		nombreContenido,
		/*imagenDetalleContenido,
        videoDetalleContenido*/
	};
	const nuevoContenido = {
		descripcionDetalleContenido,
	};
	await baseDatosORM.contenido
		.findOne({
			where: {
				idContenido: contenidoId,
			},
		})
		.then((contenido) => {
			contenido.update(actualizacion);
		});
	await baseDatosORM.detalleContenido
		.findOne({
			where: {
				contenidoIdContenido: contenidoId,
			},
		})
		.then((detalleContenido) => {
			detalleContenido.update(nuevoContenido);
		});
	req.flash("success", "Datos Actualizados.");
	res.redirect("/contenido/lista/" + id);
};

contenido.eliminar = async (req, res) => {
	const contenidoId = req.params.id;
	const id = req.user.idUsuario;
	await baseDatosORM.contenido.destroy({
		where: {
			idContenido: contenidoId,
		},
	});
	await baseDatosORM.detalleContenido.destroy({
		where: {
			contenidoIdContenido: contenidoId,
		},
	});
	res.redirect("/contenido/lista/" + id);
};

module.exports = contenido;
