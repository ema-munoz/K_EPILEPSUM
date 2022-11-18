const express = require("express");

const rutas = express.Router();

const { mostrar, verificacion } = require("../Controllers/index");

rutas.get("/", mostrar);

rutas.post("/", verificacion);

module.exports = rutas;
