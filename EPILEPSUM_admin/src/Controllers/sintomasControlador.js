const sintomasCtl = {};

const baseDatosSQL = require("../Database/basededatos.sql");
const baseDatosORM = require("../Database/basededatos.orm");

sintomasCtl.mostrar = async (req, res) => {
  res.render("sintomas/sintomasAgragar");
};

sintomasCtl.enviar = async (req, res) => {
  const id = req.user.idUsuario;
  const { nombreSintomas, descrpcionSintomas } = req.body;
  const nuevoEnvio = {
    nombreSintomas,
    descrpcionSintomas,
    usuarioIdUsuario: id,
  };
  await baseDatosORM.sintomas.create(nuevoEnvio);
  req.flash("success", "guardado");
  res.redirect("/sintomas/lista/" + id);
};

sintomasCtl.lista = async (req, res) => {
  const id = req.user.idUsuario;
  const lista = await baseDatosSQL.query(
    "select * from  sintomas where usuarioIdUsuario= ?",
    [id]
  );
  res.render("sintomas/sintomasListas", { lista });
};

sintomasCtl.traer = async (req, res) => {
  const ids = req.params.id;
  const lista = await baseDatosSQL.query(
    "select * from  sintomas where idSintomas = ?",
    [ids]
  );
  res.render("sintomas/sintomasEditar", { lista });
};

sintomasCtl.actualizar = async (req, res) => {
  const ids = req.params.id;
  const id = req.user.idUsuario;
  const { nombreSintomas, descrpcionSintomas } = req.body;
  const nuevoEnvio = {
    nombreSintomas,
    descrpcionSintomas,
  };
  await baseDatosORM.sintomas
    .findOne({ where: { idSintomas: ids } })
    .then((actualizar) => {
      actualizar.update(nuevoEnvio);
      req.flash("success", "Datos Actulizados");
      res.redirect("/sintomas/lista/" + id);
    });
};

sintomasCtl.eliminar = async (req, res) => {
  const id = req.params.id;
  const ids = req.user.idUsuario;
  await baseDatosORM.sintomas.destroy({ where: { idSintomas: id } });
  req.flash("success", "eliminacion");
  res.redirect("/sintomas/lista/" + ids);
};

module.exports = sintomasCtl;
