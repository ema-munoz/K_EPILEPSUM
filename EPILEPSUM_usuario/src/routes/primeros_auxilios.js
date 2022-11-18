const express = require("express");

const router = express.Router();

const { Ingreso } = require("../lib/auth");

const { Controlador } = require("../Controllers/primeros_auxilios");

router.use(Ingreso);

router.get("/primeros_auxilios/:id", Ingreso, Controlador);

module.exports = router;
