const roles = {}

const baseDatosSQL = require("../Configuration/basededatos.sql");
const baseDatosORM = require("../Configuration/basededatos.orm");

roles.mostrar = (req, res) => {
    res.render("roles/rolesAgregar");
}

roles.agregar = async (req, res) => {
    const rolId = req.params.id;
    const {nombreRol, estadoRol} = req.body
    const nuevoRol = {
        nombreRol,
        estadoRol,
        usuarioIdUsuario:rolId
    }
    await baseDatosORM.roles.create(nuevoRol)
    req.flash ("sucess", "Roles Agregar.")
     res.redirect("/roles/lista/" + rolId);


}


roles.lista = async (req, res) => {
    const rolId = req.params.id;
    const enlistar = await baseDatosSQL.query("SELECT * FROM rols WHERE usuarioIdUsuario = ?", [rolId]);
    res.render("roles/rolesLista", {enlistar})
}


roles.traerDatos = async(req, res) => {
    const rolId = req.params.id;
    const enlistar = await baseDatosSQL.query ("SELECT * FROM rols WHERE idrol = ?", [rolId])
    res.render("roles/rolesEditar", {enlistar});
}

roles.editar = async (req, res) => {
    const rolId = req.params.id;
    const id = req.user.idUsuario
    const {nombreRol, estadoRol} = req.body
    const actualizacion = {
        nombreRol,
        estadoRol,
        
    }
    await baseDatosORM.roles.findOne({where: {idrol: rolId}})
    .then( roles => {
        roles.update(actualizacion)
        req.flash ("sucess", "Información actualizada.")
        res.redirect("/roles/lista/" + id);
    })
}

roles.eliminar = async (req, res) => {
    const rolId = req.params.id;
    const id = req.user.idUsuario
    await baseDatosORM.roles.destroy({where: {idrol:  rolId}})
    res.redirect("/roles/lista/" + id);
}

module.exports = roles





