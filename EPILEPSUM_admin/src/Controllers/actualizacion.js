const orm = require("../Database/basededatos.orm");
const sql = require("../Database/basededatos.sql");
const encriptacion = require("../lib/helpers");
const actualizacion = {};

actualizacion.verificacion = async (req, res) => {
  const id = req.params.id;
  const datosBD = await sql.query(
    "SELECT * FROM usuarios WHERE idUsuario = ?",
    [id]
  );
  res.render("Usuario/Recuperacion", { datosBD });
};

actualizacion.verificar = async (req, res) => {
  const { id, password } = req.body;
  const nuevaActualizacion = {
    password,
  };
  nuevaActualizacion.password = await encriptacion.encryptPassword(password);
  await orm.usuario
    .findOne({ where: { idUsuario: id } })
    .then((finalActualizacion) => {
      finalActualizacion.update(nuevaActualizacion);
      req.flash("success", "Contraseña Actualizada");
      res.redirect("/Login/" + id);
    });
};

module.exports = actualizacion;
