const composicionMedicamento = {};

const baseDatosSQL = require("../Database/basededatos.sql");
const baseDatosORM = require("../Database/basededatos.orm");
const farmaco = require("../Model/farmaco");

composicionMedicamento.mostrar = async (req, res) => {    
    res.render("composicion/composicionMedicamentosAgregar");
};

composicionMedicamento.agregar = async (req, res) => {
    const farmacosId = req.user.idPaciente;
    
    const {
        idComposicion,
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
        idComposicion,
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
    res.redirect("/composicion/composicionMedicamentos/lista/" + farmacosId);
}

composicionMedicamento.lista = async (req, res) => {
    const farmacosId = req.params.id;
    const enlistar = await baseDatosSQL.query(
        "SELECT * FROM composicions WHERE pacienteIdPaciente = ?",
        [farmacosId]
    );
    res.render("composicion/composicionMedicamentosLista", { enlistar });
};

composicionMedicamento.traerDatos = async (req, res) => {
    const farmacosId = req.params.id;
    const enlistar = await baseDatosSQL.query(
        "SELECT * FROM composicions WHERE idComposicion = ?",
        [farmacosId]
    );
    res.render("composicion/composicionMedicamentosEditar", { enlistar });
};

composicionMedicamento.editar = async (req, res) => {
    const farmacosId = req.params.id;
    const id = req.user.idPaciente;
    const {
        idComposicion,
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
        idComposicion,
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
            res.redirect("/composicionMedicamentos/lista/" + id);
        });
};

composicionMedicamento.eliminar = async (req, res) => {
    const composicionesId = req.params.id;
    const id = req.user.idPaciente;
    await baseDatosORM.farmaco.destroy({
        where: { idComposiciones: composicionesId },
    });
    req.flash("sucess", "Medicamento Eliminado.");
    res.redirect("/composicionMedicamentos/lista/" + id);
};

module.exports = composicionMedicamento;
