const user = {};

const baseDatosSQL = require("../Database/basededatos.sql");

user.principal = (req, res) => {
  res.render("Página_Principal");
};

user.listar = async (req, res) => {
  const id = req.user.idUsuario;
  const enlistar = await baseDatosSQL.query(
    "SELECT * FROM contactosEmergencia WHERE usuarioIdUsuario = ?",
    [id]
  );
  res.render("Página_Principal", { enlistar });
};

module.exports = user;
