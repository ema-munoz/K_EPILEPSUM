const permisos = {}

const baseDatosSQL = require("../Configuration/basededatos.sql");
const baseDatosORM = require("../Configuration/basededatos.orm");

permisos.mostrar = (req, res) => {
    res.render("permisos/permisosAgregar");
}

permisos.agregar = async (req, res) => {
    const permisosId = req.user.idUsuario;
    const {nombrePermisos, estadoPermisos} = req.body
    const nuevoPermiso = {
        nombrePermisos,
        estadoPermisos,
        usuarioIdUsuario:permisosId
    }
    await baseDatosORM.permisos.create(nuevoPermiso)
    req.flash ("sucess", "Permisos Agregados")
     res.redirect("/permisos/lista/" + permisosId);
}

permisos.lista = async (req, res) => {
    const permisosId = req.user.idUsuario;
    const enlistar = await baseDatosSQL.query("SELECT * FROM permisos WHERE usuarioIdUsuario= ?", [permisosId])
    res.render("permisos/permisosLista", {enlistar})
}

permisos.traerDatos = async(req, res) => {
    const permisosId = req.params.id;
    const enlistar = await baseDatosSQL.query ("SELECT * FROM permisos WHERE idpermisos = ?", [permisosId])
    res.render("permisos/permisosEditar", {enlistar});
}




permisos.editar = async (req, res) => {
    const permisosId = req.params.id;
    const id = req.user.permisosId
    const {nombrePermisos, estadoPermisos} = req.body
    const actualizacion = {
        nombrePermisos,
        estadoPermisos,
        
    }
    await baseDatosORM.permisos.findOne({where: {idPermisos: permisosId}})
    .then( permisos => {
        permisos.update(actualizacion)
        req.flash ("sucess", "Información actualizada.")
        res.redirect("/permisos/lista/" + id);
    })
}

permisos.eliminar = async (req, res) => {
    const permisosId = req.params.id;
    const id = req.user.idPaciente
    await baseDatosORM.permisos.destroy({where: {idPermisos: permisosId}})
    res.redirect("/permisos/lista/" + id);
}
module.exports = permisos

