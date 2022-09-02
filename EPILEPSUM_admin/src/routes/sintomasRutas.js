const express = require('express');
const rutas = express.Router()

const { mostrar, enviar, eliminar, lista, traer, actualizar } = require('../controllers/sintomasControlador')

rutas.get('/agregar/:id', mostrar)
rutas.post('/agregar/:id', enviar)
rutas.get('/lista/:id', lista)
rutas.get('/editar/:id', traer)
rutas.post('/editar/:id', actualizar)
rutas.get('/eliminar/:id', eliminar)

module.exports = rutas