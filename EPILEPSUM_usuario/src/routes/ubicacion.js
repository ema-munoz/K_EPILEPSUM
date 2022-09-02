const express = require('express');

const router = express.Router();

const {Ingreso} = require ("../lib/auth");

const {ubicacion} = require ("../Controllers/ubicacion");

router.use(Ingreso)

router.get("/ubicacion/:id", Ingreso, ubicacion);

module.exports = router;