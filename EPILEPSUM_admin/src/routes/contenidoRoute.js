const express = require('express');

const rutas = express.Router()

const { mostrar, agregar, lista, traerDatos, editar, eliminar } = require('../controllers/contenidoController')

rutas.get('/agregar/:id', mostrar)

rutas.post('/agregar/:id', agregar)

rutas.get('/lista/:id', lista)

rutas.get('/editar/:id', traerDatos)

rutas.post('/editar/:id', editar)

rutas.get('/eliminar/:id', eliminar)

module.exports = rutas
