const express = require("express");

const rutas = express.Router();

const { login, verificacion } = require("../Controllers/index");

rutas.get("/", login);

rutas.post("/", verificacion);

module.exports = rutas;
