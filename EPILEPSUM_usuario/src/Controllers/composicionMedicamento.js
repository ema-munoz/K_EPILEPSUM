const composicionMedicamento = {};

const baseDatosSQL = require("../Database/basededatos.sql");
const baseDatosORM = require("../Database/basededatos.orm");
const farmaco = require("../Model/farmaco");

composicionMedicamento.mostrar = async (req, res) => {
    const enlistar = await baseDatosSQL.query(
        "SELECT * FROM composicions"    
    );
    res.render("composicion/composicionMedicamentos", {enlistar});
};

composicionMedicamento.agregar = async(req, res) => {
    const farmacosId = req.params.id;
    const {
        nombreMedicamentos,
        composicionMedicamentos,
        descripcionMedicamentos,
        viaAdministracionMedicamentos,
        indicacionesMedicamentos,
        dosisMedicamentos,
        fechaElaboracionMedicamentos,
        fechaVencimientoMedicamentos,
        laboratorioMedicamentos,  
    } = req.body;
    const nuevoFarmaco = {
        nombreMedicamentos,
        composicionMedicamentos,
        descripcionMedicamentos,
        viaAdministracionMedicamentos,
        indicacionesMedicamentos,
        dosisMedicamentos,
        fechaElaboracionMedicamentos,
        fechaVencimientoMedicamentos,
        laboratorioMedicamentos,  
        pacienteIdPaciente: farmacosId,
    };

    await baseDatosORM.farmaco.create(nuevoFarmaco);
    req.flash("sucess", "Medicamento Registrado.");
    res.redirect("/farmaco/lista/" + farmacosId);
}

composicionMedicamento.lista = async (req, res) => {
    const farmacosId = req.params.id;
    const enlistar = await baseDatosSQL.query(
        "SELECT * FROM composicions WHERE pacienteIdPaciente = ?",
		[farmacosId]
    );
    res.render("/farmaco/farmacoLista/", { enlistar });
};

composicionMedicamento.traerDatos = async (req, res) => {
	const farmacosId = req.params.id;
	const enlistar = await baseDatosSQL.query(
		"SELECT * FROM composicions WHERE idComposiciones = ?",
		[farmacosId]
	);
	res.render("farmaco/farmacoEditar/", { enlistar });
};

composicionMedicamento.editar = async (req, res) => {
	const farmacosId = req.params.id;
	const id = req.user.idPaciente;
	const {
        nombreMedicamentos,
        composicionMedicamentos,
        descripcionMedicamentos,
        viaAdministracionMedicamentos,
        indicacionesMedicamentos,
        dosisMedicamentos,
        fechaElaboracionMedicamentos,
        fechaVencimientoMedicamentos,
        laboratorioMedicamentos,  
	} = req.body;
	const actualizacion = {
		nombreMedicamentos,
        composicionMedicamentos,
        descripcionMedicamentos,
        viaAdministracionMedicamentos,
        indicacionesMedicamentos,
        dosisMedicamentos,
        fechaElaboracionMedicamentos,
        fechaVencimientoMedicamentos,
        laboratorioMedicamentos,  
	};
	await baseDatosORM.medicacion
		.findOne({ where: { idFarmaco: farmacosId } })
		.then((medicacion) => {
			medicacion.update(actualizacion);
			req.flash("sucess", "Medicamento Actualizado.");
			res.redirect("/farmaco/lista/" + id);
		});
};

composicionMedicamento.eliminar = async (req, res) => {
    const composicionesId = req.params.id;
    const id = req.user.idPaciente;
	await baseDatosORM.farmaco.destroy({
		where: { idComposiciones: composicionesId },
	});
    req.flash("sucess", "Medicamento Eliminado.");
	res.redirect("/farmaco/lista/" + id);
};

module.exports = composicionMedicamento;
