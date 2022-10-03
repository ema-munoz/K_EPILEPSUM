const index = {};

const baseDatosSQL = require("../Configuration/basededatos.sql");

index.Controlador = (req, res)=>{
    res.render ("CitaControl/CitaControl");
}

index.lista = async (req, res) => {
    const medicamentosId = req.params.id;
    const enlistar = await baseDatosSQL.query("SELECT * FROM medicaciones WHERE pacienteIdPaciente = ?", [medicamentosId])
    res.render("CitaControl/CitaControl", {enlistar})
}

module.exports = index;
