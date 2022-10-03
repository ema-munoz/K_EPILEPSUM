const componenteFarmacos = {};

const baseDatosSQL = require("../Database/basededatos.sql");
const baseDatosORM = require("../Database/basededatos.orm");

componenteFarmacos.mostrar = async (req, res) => {
	const enlistar = await baseDatosSQL.query(
		"SELECT * FROM componentefarmacos"
	);
	res.render("ComponenteFarmaco/componenteFarmaco", { enlistar });
};

componenteFarmacos.agregar = async (req, res) => {
	const composicionMedicamentoModelId = req.params.id;
	/*const { idComposiciones } = req.body;*/
	const { idComponenteFarmaco } = req.body;
	const nuevocomponenteFarmacos = {
		idComponenteFarmaco,
		composicionMedicamentos,
	};

	await baseDatosORM.composicionMedicamento.create(nuevocomponenteFarmacos);
	req.flash("sucess", "Farmaco Registrado.");
	res.redirect(
		"/composicionMedicamento/lista/" + composicionMedicamentoModelId
	);
};

componenteFarmacos.traerDatos = async (req, res) => {
	const composicionMedicamentoModelId = req.params.id;
	const enlistar = await baseDatosSQL.query(
		"SELECT * FROM composicions WHERE idComposiciones = ?",
		[composicionMedicamentoModelId]
	);
	res.render("farmaco/farmacoEditar/", { enlistar });
};

module.exports = componenteFarmacos;
