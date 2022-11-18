const orm = require("../Database/basededatos.orm");
const sql = require("../Database/basededatos.sql");
const encriptacion = require("../lib/helpers");
const registro = {};

const passport = require("passport");

registro.vista = (req, res) => {
  res.render("Usuario/Registro");
};

registro.registro = passport.authenticate("local.signup", {
  successRedirect: "/CerrarSesion",
  failureRedirect: "/Registro",
  failureFlash: true,
});

registro.vistaLogin = async (req, res) => {
  const id = req.params.id;
  const datosBD = await sql.query(
    "SELECT * FROM pacientes WHERE idPaciente = ?",
    [id]
  );
  res.render("Usuario/Login", { datosBD });
};

registro.login = passport.authenticate("local.signin", {
  successRedirect: "/Inicio",
  failureRedirect: "/Verificacion",
  failureFlash: true,
});

registro.logout = (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    req.flash("success", "Sesión terminada.");
    res.redirect("/");
  });
};

module.exports = registro;
