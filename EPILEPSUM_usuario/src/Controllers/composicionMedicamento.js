const composicionMedicamento = {};

const baseDatosSQL = require("../Database/basededatos.sql");
const baseDatosORM = require("../Database/basededatos.orm");

composicionMedicamento.mostrar = async (req, res) => {
    const enlistar = await baseDatosSQL.query(
        "SELECT * FROM composicions"    
    );
    res.render("composicion/composicionMedicamentos", {enlistar});
};




module.exports = composicionMedicamento;
