const express = require('express');
const rutas = express.Router()

const { enseñar, dirigir, lista, traer, actualizar, eliminar } = require('../controllers/proyecto')

rutas.get('/agregar/', enseñar)
rutas.post('/agregar/', dirigir)
rutas.get('/lista/:id', lista)
rutas.get('/editar/:id', traer)
rutas.post('/editar/:id', actualizar)
rutas.get('/eliminar/:id', eliminar)

module.exports = rutas