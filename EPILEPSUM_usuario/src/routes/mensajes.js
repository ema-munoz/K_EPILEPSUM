const express = require("express");

const router = express.Router();

const { Ingreso } = require("../lib/auth");

const { agregar, mostrar } = require("../Controllers/mensajes");

router.use(Ingreso);

router.post("/amigos/:id", Ingreso, agregar);

router.get("/amigos/:id", Ingreso, mostrar);

module.exports = router;
