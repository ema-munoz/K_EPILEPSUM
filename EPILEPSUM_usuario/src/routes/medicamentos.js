const express = require('express');

const routes = express.Router()

const {Ingreso} = require ("../lib/auth");

const {mostrar, agregar, lista, traerDatos, editar, eliminar} = require("../Controllers/medicamentos");

routes.use (Ingreso)

routes.get ("/agregar/:id", Ingreso, mostrar)

routes.post ("/agregar/:id", Ingreso, agregar)

routes.get ("/lista/:id", Ingreso, lista)

routes.get ("/editar/:id", Ingreso, traerDatos)

routes.post ("/editar/:id", Ingreso, editar)

routes.get ("/eliminar/:id", Ingreso, eliminar)

module.exports = routes
