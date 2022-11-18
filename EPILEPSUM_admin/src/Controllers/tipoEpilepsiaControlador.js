const tipoEpilepsiaCtl = {};

const baseDatosSQL = require("../Database/basededatos.sql");
const baseDatosORM = require("../Database/basededatos.orm");

tipoEpilepsiaCtl.mostrar = async (req, res) => {
  res.render("tipoEpilepsia/tipoEpilepsiaAgragar");
};

tipoEpilepsiaCtl.enviar = async (req, res) => {
  const id = req.user.idUsuario;
  const { nombreTipoEpilepsia, descripcionTipoEpilepsia } = req.body;
  const nuevoEnvio = {
    nombreTipoEpilepsia,
    descripcionTipoEpilepsia,
    usuarioIdusuario: id,
  };
  await baseDatosORM.tipoEpilepsia.create(nuevoEnvio);
  req.flash("success", "guardado");
  res.redirect("/tipoEpilepsia/lista/" + id);
};

tipoEpilepsiaCtl.lista = async (req, res) => {
  const ids = req.params.id;
  const lista = await baseDatosSQL.query("select * from  TipoEpilepsia");
  res.render("tipoEpilepsia/tipoEpilepsiaListas", { lista });
};

tipoEpilepsiaCtl.traer = async (req, res) => {
  const ids = req.params.id;
  const lista = await baseDatosSQL.query(
    "select * from  tipoEpilepsia where idTipoEpilepsia = ?",
    [ids]
  );
  res.render("tipoEpilepsia/tipoEpilepsiaEditar", { lista });
};

tipoEpilepsiaCtl.actualizar = async (req, res) => {
  const ids = req.params.id;
  const id = req.user.idUsuario;
  const { nombreTipoEpilepsia, descripcionTipoEpilepsia } = req.body;
  const nuevoEnvio = {
    nombreTipoEpilepsia,
    descripcionTipoEpilepsia,
  };
  await baseDatosORM.tipoEpilepsia
    .findOne({ where: { idTipoEpilepsia: ids } })
    .then((actualizar) => {
      actualizar.update(nuevoEnvio);
      req.flash("success", "Datos Actulizados");
      res.redirect("/tipoEpilepsia/lista/" + id);
    });
};

tipoEpilepsiaCtl.eliminar = async (req, res) => {
  const id = req.params.id;
  const ids = req.user.idUsuario;
  await baseDatosORM.tipoEpilepsia.destroy({
    where: { idTipoEpilepsia: id },
  });
  req.flash("success", "eliminacion");
  res.redirect("/tipoEpilepsia/lista/" + ids);
};

module.exports = tipoEpilepsiaCtl;
