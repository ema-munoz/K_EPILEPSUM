const express = require("express");

const router = express.Router();

const { Ingreso } = require("../lib/auth");

const {
  agregar,
  eliminar,
  mostrar,
  MostrarAmigos,
} = require("../Controllers/solicitudes");

router.use(Ingreso);

router.get("/solicitudes/:id", Ingreso, mostrar);

router.post("/solicitudes/:id", Ingreso, agregar);

router.get("/eliminar/:id", Ingreso, eliminar);

router.get("/lista/:id", Ingreso, MostrarAmigos);

module.exports = router;
