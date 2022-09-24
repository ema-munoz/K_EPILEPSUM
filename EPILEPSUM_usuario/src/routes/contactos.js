const express = require("express");

const router = express.Router();

const { Ingreso } = require("../lib/auth");

const { contactos } = require("../Controllers/Contactos");

router.use(Ingreso);

router.get("/Contacto/:id", Ingreso, contactos);

module.exports = router;
