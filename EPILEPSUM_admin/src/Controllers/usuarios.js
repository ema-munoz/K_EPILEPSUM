const usuario = {}

const baseDatosSQL = require("../Configuration/basededatos.sql");
const baseDatosORM = require("../Configuration/basededatos.orm");

// consultar si necesiat estar lo de agregar 

usuario.agregar = async (req, res) => {
    const usuarioId = req.user.idUsuario;
    const {nombrePermisos, estadoPermisos} = req.body
    const nuevoPermiso = {
        nombrePermisos,
        estadoPermisos,
        usuarioIdUsuario:permisosId
    }
    await baseDatosORM.medicacion.create(nuevoPermiso)
    req.flash ("sucess", "Permisos.")
     res.redirect("/usuarios/lista/" + permisosId);
}

usuario.mostrar = (req, res) => {
    res.render("usuario/pusuarioLista");
}

usuario.lista = async (req, res) => {
    const usuarioId = req.params.id;
    const enlistar = await baseDatosSQL.query("SELECT * FROM usuario WHERE usuarioIdusuario= ?", [usuarioId])
    res.render("usuario/permisosLista", {enlistar})
}