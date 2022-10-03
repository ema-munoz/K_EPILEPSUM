const medicamentos = {}

const baseDatosSQL = require("../Configuration/basededatos.sql");
const baseDatosORM = require("../Configuration/basededatos.orm");

medicamentos.mostrar = (req, res) => {
    res.render("Medicamentos/medicamentosAgregar");
}

medicamentos.agregar = async (req, res) => {
    const medicamentosId = req.params.id;
    const {nombreMedicaciones, dosisMedicaciones, horaMedicaciones, fechaInicioMedicaciones, fechaFinalMedicaciones} = req.body
    const nuevoMedicamento = {
        nombreMedicaciones,
        dosisMedicaciones,
        horaMedicaciones,
        fechaInicioMedicaciones,
        fechaFinalMedicaciones,
        pacienteIdPaciente: medicamentosId
    }
    await baseDatosORM.medicacion.create(nuevoMedicamento)
    req.flash ("sucess", "Medicamento Registrado.")
     res.redirect("/medicamentos/lista/" + medicamentosId);
}

medicamentos.lista = async (req, res) => {
    const medicamentosId = req.params.id;
    const enlistar = await baseDatosSQL.query("SELECT * FROM medicaciones WHERE pacienteIdPaciente = ?", [medicamentosId])
    res.render("Medicamentos/medicamentosLista", {enlistar})
}

medicamentos.traerDatos = async(req, res) => {
    const medicamentosId = req.params.id;
    const enlistar = await baseDatosSQL.query ("SELECT * FROM medicaciones WHERE idMedicaciones = ?", [medicamentosId])
    res.render("Medicamentos/medicamentosEditar", {enlistar});
}

medicamentos.editar = async (req, res) => {
    const medicamentosId = req.params.id;
    const id = req.user.idPaciente
    const {nombreMedicaciones, dosisMedicaciones, horaMedicaciones, fechaInicioMedicaciones, fechaFinalMedicaciones} = req.body
    const actualizacion = {
        nombreMedicaciones,
        dosisMedicaciones,
        horaMedicaciones,
        fechaInicioMedicaciones, 
        fechaFinalMedicaciones
    }
    await baseDatosORM.medicacion.findOne({where: {idMedicaciones: medicamentosId}})
    .then( medicacion => {
        medicacion.update(actualizacion)
        req.flash ("sucess", "Información actualizada.")
        res.redirect("/medicamentos/lista/" + id);
    })
}

medicamentos.eliminar = async (req, res) => {
    const medicamentosId = req.params.id;
    const id = req.user.idPaciente
    await baseDatosORM.medicacion.destroy({where: {idMedicaciones: medicamentosId}})
    res.redirect("/medicamentos/lista/" + id);
}

module.exports = medicamentos
