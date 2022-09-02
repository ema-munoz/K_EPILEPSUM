const express = require('express');

const routes = express.Router()

const {Ingreso} = require("../lib/auth");

const {mostrar,
    agregar,
    lista,
    traer,
    detalle,
    editar,
    eliminarDuda,
    eliminarRespuesta} = require("../Controllers/dudasController");

routes.use (Ingreso)

routes.get ("/agregar/:id", Ingreso, mostrar)

routes.post ("/agregar/:id", Ingreso, agregar)

routes.get ("/lista/:id", Ingreso, lista)

routes.get ("/detalle/:id", Ingreso, detalle)

routes.get ("/editar/:id", Ingreso, traer)

routes.post ("/editar/:id", Ingreso, editar)

routes.get ("/eliminar/:id", Ingreso, eliminarDuda)

routes.get ("/eliminarRespuesta/:id", Ingreso, eliminarRespuesta)

module.exports = routes
