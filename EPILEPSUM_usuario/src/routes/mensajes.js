const express = require('express');

const router = express.Router();

const {Ingreso} = require ("../lib/auth");

const {agregar, mostrar} = require ("../Controllers/mensajes");

router.use(Ingreso)

router.get ("/mensajes/:id", Ingreso, mostrar)

router.get ("/mensajes/:id", Ingreso, agregar)

router.get("/mensajes/:id", Ingreso, mensajes);

module.exports = router;