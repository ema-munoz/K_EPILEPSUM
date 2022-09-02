const index = {};

const baseDatosSQL = require("../Database/basededatos.sql");

index.Controlador = (req, res) => {
	res.render("Primeros_Auxilios/Primeros_Auxilios");
};

module.exports = index;
