const index = {};

const baseDatosSQL = require("../Configuration/basededatos.sql");

index.Controlador = (req, res)=>{
    res.render ("Primeros_Auxilios/Primeros_Auxilios");
}

module.exports = index;
