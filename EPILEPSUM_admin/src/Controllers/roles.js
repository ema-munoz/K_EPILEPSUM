const rols = {}

const baseDatosSQL = require("../Configuration/basededatos.sql");
const baseDatosORM = require("../Configuration/basededatos.orm");

rols.mostrar = (req, res) => {
    res.render("roles/rolesAgregar");
}

rols.agregar = async (req, res) => {
    const rolId = req.params.id;
    const {nombreRol, estadoRol} = req.body
    const nuevoRol = {
        nombreRol,
        estadoRol,    }
    await baseDatosORM.rol.create(nuevoRol)
    req.flash ("sucess", "Roles Agregar.")
     res.redirect("/roles/lista/" + rolId);
}
rols.lista = async (req, res) => {
    const rolId = req.params.id;
    const enlistar = await baseDatosSQL.query("SELECT * FROM roles ", [rolId]);
    res.render("roles/rolesLista", {enlistar})
}

rols.traerDatos = async(req, res) => {
    const rolId = req.params.id;
    const enlistar = await baseDatosSQL.query ("SELECT * FROM roles WHERE idrol = ?", [rolId])
    res.render("roles/rolesEditar", {enlistar});
}

rols.editar = async (req, res) => {
    const rolId = req.params.id;
    const id = req.user.idUsuario
    const {nombreRol, estadoRol} = req.body
    const actualizacion = {
        nombreRol,
        estadoRol,
    }
    await baseDatosORM.rol.findOne({where: {idrol: rolId}})
    .then( roles => {
        roles.update(actualizacion)
        req.flash ("sucess", "Información actualizada.")
        res.redirect("/roles/lista/" + id);
    })
}
rols.eliminar = async (req, res) => {
    const rolId = req.params.id;
    const id = req.user.idUsuario
    await baseDatosORM.rol.destroy({where: {idrol:  rolId}})
    res.redirect("/roles/lista/" + id);
}

module.exports = rols







