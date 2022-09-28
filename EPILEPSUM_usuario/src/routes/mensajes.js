const express = require('express');

const router = express.Router();

const {Ingreso} = require ("../lib/auth");

const {agregar, mostrar} = require ("../Controllers/mensajes");

router.use(Ingreso)

router.post("/agregar/:id", Ingreso, agregar);

router.get("/lista/:id", Ingreso, mostrar);

module.exports = router;