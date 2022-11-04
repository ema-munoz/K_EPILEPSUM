const proyectoCtl = {};

const orm = require("../Database/basededatos.orm");
const sql = require("../Database/basededatos.sql");

proyectoCtl.enseñar = async (req, res) => {
	const id = req.user.idUsuario;
	const proyecto = await sql.query(
		"select * from proyectos where usuarioIdUsuario = ?",
		[id]
	);
	res.render("proyecto/agregarProyecto", { proyecto });
};

proyectoCtl.dirigir = async (req, res) => {
	const id = req.user.idUsuario;
	const ids = req.params.id;
	const { nombreProyecto, objetivos, numero } = req.body;
	const nuevoEnvio = {
		nombreProyecto,
		usuarioIdUsuario: id,
	};
	await orm.proyecto.create(nuevoEnvio);
	for (let i = 0; i < objetivos.length; i++) {
		await sql.query(
			"INSERT INTO detalleproyectos (objetivo, proyectoIdProyecto) VALUES(?, ?)",
			[objetivos[i], numero]
		);
	}
	req.flash("success", "guardado");
	res.redirect("/proyecto/lista/" + id);
};

proyectoCtl.lista = async (req, res) => {
	const ids = req.params.id;
	const lista = await ("select * from  proyectos where usuarioIdUsuario = ?",
	[ids]);
	const objetivos =
		await "select * from detalleproyectos where proyectoIdProyecto";
	res.render("proyecto/listaProyecto", {
		lista,
		objetivos,
	});
};

proyectoCtl.eliminar = async (req, res) => {
	const id = req.params.id;
	await orm.proyecto.destroy({ where: { idProyecto: id } });
	await orm.detalleProyecto.destroy({ where: { proyectoIdProyecto: id } });
	req.flash("success", "eliminacion");
	res.redirect("/proyecto/lista/" + id);
};

proyectoCtl.traer = async (req, res) => {
	const ids = req.params.id;
	const listas = await ("select * from  proyectos where idProyecto = ?",
	[ids]);
	const objetivos =
		await ("select * from detalleproyectos where proyectoIdProyecto = ?",
		[ids]);
	res.render("proyecto/editarProyecto", {
		listas,
		objetivos,
	});
};

proyectoCtl.actualizar = async (req, res) => {
	const ids = req.params.id;
	const { nombreProyecto, objetivos, numero } = req.body;
	const nuevoEnvio = {
		nombreProyecto,
		usuarioIdUsuario: id,
	};
	await orm.proyecto
		.findOne({ where: { idProyecto: ids } })
		.then((actualizar) => {
			actualizar.update(nuevoEnvio);
		});
	for (let i = 0; i < objetivos.length; i++) {
		await sql.query(
			"UPDATE proyectos set objetivo = ? , proyectoIdProyecto = ?",
			[objetivos[i], numero]
		);
	}
	req.flash("success", "guardado");
	res.redirect("/proyecto/lista/" + id);
};

module.exports = proyectoCtl;
