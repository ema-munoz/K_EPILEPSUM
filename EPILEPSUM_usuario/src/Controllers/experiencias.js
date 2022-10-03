const experiencias = {}

const baseDatosSQL = require("../Configuration/basededatos.sql");
const baseDatosORM = require("../Configuration/basededatos.orm");

experiencias.mostrar = async (req, res) => {
    const idMax = await baseDatosSQL.query("SELECT MAX(idExperiencias) FROM experiencias")
    res.render("experiencias/experienciasAgregar", {idMax});
}

experiencias.agregar = async (req, res) => {
    const experienciasId = req.params.id;
    const {nombreExperiencia, imagenExperiencia, videoExperiencia, experienciasDetallesExperiencias, experiencia} = req.body
    const nuevoAgregamiento = {
        
        nombreExperiencia,
        imagenExperiencia,
        videoExperiencia,
        pacienteIdPaciente: experienciasId
    }
    const nuevaExperiencia = {
        experienciasDetallesExperiencias,
        experienciaIdExperiencias: experiencia
    }
    await baseDatosORM.experiencias.create(nuevoAgregamiento)
    await baseDatosORM.detallesExperiencias.create(nuevaExperiencia)
    res.redirect("/experiencias/lista/" + experienciasId);    
}

experiencias.lista = async (req, res) => {
    const experienciasId = req.params.id;
    const enlistar = await baseDatosSQL.query("SELECT * FROM listaexperiencia WHERE pacienteIdPaciente = ?",[experienciasId])
    res.render("experiencias/experienciasLista", {enlistar});
}

experiencias.traerDatos = async (req, res) => {
    const experienciasId = req.params.id;
    const enlistar = await baseDatosSQL.query("SELECT * FROM listaexperiencia WHERE idExperiencias = ?",[experienciasId])
    res.render("experiencias/experienciasEditar", {enlistar});
}

experiencias.editar = async (req, res) => {
    const experienciasId = req.params.id;
    const id = req.user.idPaciente
    const {nombreExperiencia, imagenExperiencia, videoExperiencia, experienciasDetallesExperiencias,} = req.body
    const actualizacion = {
        nombreExperiencia, 
        imagenExperiencia,
        videoExperiencia,
    }
    const nuevaExperiencia = {
        experienciasDetallesExperiencias,
    }
    await baseDatosORM.experiencias.findOne({where: {idExperiencias: experienciasId}})
    .then(experiencias => {
        experiencias.update(actualizacion)
    })
    await baseDatosORM.detallesExperiencias.findOne({where: {experienciaIdExperiencias: experienciasId}})
    .then(detallesExperiencias => {
        detallesExperiencias.update(nuevaExperiencia)
    })
    req.flash ("success", "Datos Actulizados.")
    res.redirect("/experiencias/lista/" + id);    
}

experiencias.eliminar = async (req, res) => {
    const experienciasId = req.params.id;
    const id = req.user.idPaciente
    await baseDatosORM.experiencias.destroy({where: {idExperiencias: experienciasId}})
    res.redirect("/experiencias/lista/" + id);
}

module.exports = experiencias