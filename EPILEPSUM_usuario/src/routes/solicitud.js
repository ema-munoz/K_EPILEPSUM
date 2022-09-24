const express = require("express");

const router = express.Router();

const { Ingreso } = require("../lib/auth");

const { agregar, eliminar, mostrar } = require("../Controllers/solicitudes");

router.use(Ingreso);

router.post("/agregar/:id", Ingreso, agregar);

router.get("/eliminar/:id", Ingreso, eliminar);

router.get("/lista/:id", Ingreso, mostrar);

module.exports = router;
