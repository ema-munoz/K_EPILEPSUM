const express = require("express");

const router = express.Router();

const { Ingreso } = require("../lib/auth");

const { lista } = require("../Controllers/citaControl");

router.use(Ingreso);

router.get("/Control/:id", Ingreso, lista);

module.exports = router;
