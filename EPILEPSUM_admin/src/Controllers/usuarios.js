const usuarios = {}

const baseDatosSQL = require("../Configuration/basededatos.sql");
const baseDatosORM = require("../Configuration/basededatos.orm");

usuarios.mostrar = (req, res) => {
    res.render("usuarios/usuariosAgregar");
}

usuarios.agregar = async (req, res) => {
    const usuariosId = req.user.idUsuario;
    const {nombreUsuario, estadoUsuario} = req.body
    const nuevoUsuario = {
        nombreUsuario,
        estadoUsuario,
        usuarioIdUsuario:usuariosId
    }
    await baseDatosORM.rolUsuarios.create(nuevoUsuario)
    req.flash ("sucess", "Usuarios Agregados")
     res.redirect("/usuarios/lista/" + usuariosId);
}

usuarios.lista = async (req, res) => {
    const usuariosId = req.user.idUsuario;
    const enlistar = await baseDatosSQL.query("SELECT * FROM rolusuarios WHERE usuarioIdUsuario= ?", [usuariosId])
    res.render("usuarios/usuariosLista", {enlistar})
}

usuarios.traerDatos = async(req, res) => {
    const usuariosId = req.params.id;
    const enlistar = await baseDatosSQL.query ("SELECT * FROM rolusuarios WHERE idusuario = ?", [usuariosId])
    res.render("usuarios/usuariosEditar", {enlistar});
}


usuarios.editar = async (req, res) => {
    const usuariosId = req.params.id;
    const id = req.user.idUsuario
    const {nombreUsuario, estadoUsuario} = req.body
    const actualizacion = {
        nombreUsuario,
        estadoUsuario,
    }

    await baseDatosORM.rolUsuarios.findOne({where: {idusuario: usuariosId}})
    .then( usuarios => {
        usuarios.update(actualizacion)
        req.flash ("sucess", "Información actualizada.")
        res.redirect("/usuarios/lista/" + id);
    })
}

usuarios.eliminar = async (req, res) => {
    const usuariosId = req.params.id;
    const id = req.user.idUsuario
    await baseDatosORM.rolUsuarios.destroy({where: {idusuario: usuariosId}})
    res.redirect("/usuarios/lista/" + id);
}



module.exports = usuarios

