const orm = require("../Database/basededatos.orm");
const sql = require("../Database/basededatos.sql");
const index = {};

index.mostrar = (req, res) => {
	res.render("Usuario/Verificacion");
};

index.verificacion = async (req, res, done) => {
	const { username } = req.body;
	const verificar = await orm.usuario.findOne({
		where: {
			username: username,
		},
	});

	if (verificar) {
		const clientes = verificar;

		if (clientes.username === null) {
			done(
				null,
				false,
				req.flash(
					"success",
					"No tiene cuenta con este correo, usted será redirigido a Registro."
				)
			);
		} else {
			res.redirect("/Login/" + clientes.idUsuario);
		}
	} else {
		res.redirect("/Registro");
	}
};

module.exports = index;
