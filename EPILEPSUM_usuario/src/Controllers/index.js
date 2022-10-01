const orm = require("../Configuration/basededatos.orm");
const sql = require("../Configuration/basededatos.sql");
const index = {};

index.login = (req, res) => {
    res.render("Usuario/Verificacion");
}


index.verificacion = async (req, res, done) => {
    const {
        username
    } = req.body
    const verificar = await orm.pacientes.findOne({
        where: {
            username: username
        }
    })

    if (verificar) {
        const clientes = verificar;

        if (clientes.username === null) {
            done(null, false, req.flash("success", "No tiene cuenta con este correo, usted será redirigido a Registro."));
        } else {
            res.redirect('/Login/' + clientes.idPaciente);
        }
    } else {
        res.redirect('/Registro');
    }


    const traerDatosFamiliar = await sql.query("SELECT * FROM familiares")

    if (traerDatosFamiliar.length == 0) {
        const familiar = traerDatosFamiliar[0]

        if (familiar === undefined) {
            await sql.query("INSERT INTO familiares (nombreFamiliar) VALUES ('MADRE')");
            await sql.query("INSERT INTO familiares (nombreFamiliar) VALUES ('PADRE')");
            await sql.query("INSERT INTO familiares (nombreFamiliar) VALUES ('HERMANO')");
            await sql.query("INSERT INTO familiares (nombreFamiliar) VALUES ('HERMANA')");
            await sql.query("INSERT INTO familiares (nombreFamiliar) VALUES ('TÍA')");
            await sql.query("INSERT INTO familiares (nombreFamiliar) VALUES ('TÍO')");
            await sql.query("INSERT INTO familiares (nombreFamiliar) VALUES ('ABUELO')");
            await sql.query("INSERT INTO familiares (nombreFamiliar) VALUES ('ABUELA')");
            await sql.query("INSERT INTO familiares (nombreFamiliar) VALUES ('PRIMO')");
            await sql.query("INSERT INTO familiares (nombreFamiliar) VALUES ('PRIMA')");

            await sql.query("CREATE VIEW listaExperiencia as SELECT e.*, d.* FROM experiencias e join detallesexperiencias d ON  d.experienciaIdExperiencias = e.idExperiencias")

            console.log("Guardado con éxito.")
        }

    } else {
        console.log("Ya esta creado.")
    }
}

module.exports = index;
