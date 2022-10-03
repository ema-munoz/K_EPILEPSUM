const efectosSecundariosCtl = {}

const baseDatosSQL = require("../Configuration/basededatos.sql");
const baseDatosORM = require("../Configuration/basededatos.orm");



efectosSecundariosCtl.mostrar = async(req, res) => {
    res.render('efectosSecundarios/efectosSecundariosAgragar' )
}

efectosSecundariosCtl.enviar = async(req, res) => {
    const id = req.user.idUsuario
    const { nombreEfectosSecundarios, descripcionEfectosSecundarios} = req.body
    const nuevoEnvio = {
        nombreEfectosSecundarios,
        descripcionEfectosSecundarios,
        usuarioIdusuario: id  
    }
    await baseDatosORM.efectosSecundarios.create(nuevoEnvio)
    req.flash('success', 'guardado')
    res.redirect('/efectosSecundarios/lista/' + id)
    }


efectosSecundariosCtl.lista = async(req, res) => {
const ids = req.params.id
const lista = await baseDatosSQL.query('select * from  efectosSecundarios ')
res.render('efectosSecundarios/efectosSecundariosListas',{ lista})
}

efectosSecundariosCtl.traer = async(req, res) => {
    const ids = req.params.id
    const lista = await  baseDatosSQL.query('select * from  efectosSecundarios where idEfectosSecundarios = ?', [ids])
    res.render('efectosSecundarios/efectosSecundariosEditar', { lista})

}

efectosSecundariosCtl.actualizar = async(req, res) => {
    const ids = req.params.id
    const id = req.user.idUsuario
    const {  nombreEfectosSecundarios,descripcionEfectosSecundarios } = req.body
    const nuevoEnvio = {
        nombreEfectosSecundarios,
        descripcionEfectosSecundarios
    
    }
    await baseDatosORM.efectosSecundarios.findOne({ where: { idEfectosSecundarios: ids } })
    .then(actualizar => {
        actualizar.update(nuevoEnvio)
        req.flash("success","Datos Actulizados")
        res.redirect('/efectosSecundarios/lista/' + id)
    })
}

efectosSecundariosCtl.eliminar = async(req, res) => {
    const id = req.params.id
    const ids = req.user.idUsuario
    await baseDatosORM.efectosSecundarios.destroy({ where: { idEfectosSecundarios: id } })
    req.flash('success', 'eliminacion')
    res.redirect('/efectosSecundarios/lista/' + ids)
}

module.exports = efectosSecundariosCtl