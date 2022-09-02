const express = require('express');

const rutas = express.Router();

const {vista, registro, vistaLogin, login, logout} = require ("../Controllers/registro.js");

rutas.get("/Registro", vista);

rutas.post("/Registro", registro);

rutas.get("/Login/:id", vistaLogin);

rutas.post("/Login", login);

rutas.get("/CerrarSesion", logout);

module.exports = rutas;
