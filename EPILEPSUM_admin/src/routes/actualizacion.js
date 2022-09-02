const express = require('express');

const rutas = express.Router();

const {verificacion, verificar} = require ("../Controllers/actualizacion");

rutas.get("/actualizar/:id", verificacion);

rutas.post("/actualizar/", verificar);

module.exports = rutas