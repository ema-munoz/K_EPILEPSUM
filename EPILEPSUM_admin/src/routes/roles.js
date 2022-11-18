const express = require("express");
const rutas = express.Router();
const { Ingreso } = require("../lib/auth");

const {
  mostrar,
  agregar,
  lista,
  traerDatos,
  editar,
  eliminar,
} = require("../controllers/roles");
rutas.get("/agregar/:id", Ingreso, mostrar);
rutas.post("/agregar/:id", Ingreso, agregar);
rutas.get("/lista/:id", Ingreso, lista);
rutas.get("/editar/:id", Ingreso, traerDatos);
rutas.post("/editar/:id", Ingreso, editar);
rutas.get("/eliminar/:id", Ingreso, eliminar);

module.exports = rutas;
