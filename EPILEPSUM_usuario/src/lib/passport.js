const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const pool = require("../Configuration/basededatos.orm");
const sql = require("../Configuration/basededatos.sql");
const helpers = require("./helpers");

passport.use(
    "local.signin",
    new LocalStrategy({
            usernameField: "username",
            passwordField: "password",
            passReqToCallback: true
        },
        async (req, username, password, done) => {
            const rows = await pool.pacientes.findOne({
                where: {
                    username: username
                }
            })
            if (rows) {
                const user = rows;
                const validPassword = await helpers.matchPassword(
                    password,
                    user.password
                );
                if (validPassword) {
                    done(null, user, req.flash("success", "Bienvenido/a " + user.nombrePaciente));
                } else {
                    done(null, false, req.flash("success", "Contraseña incorrecta"));
                }
            } else {
                return done(
                    null,
                    false,
                    req.flash("message", "El nombre del usuario no existe.")
                );
            }
        }
    )
);

passport.use(
    "local.signup",
    new LocalStrategy({
            usernameField: "username",
            passwordField: "password",
            passReqToCallback: true
        },
        async (req, username, password, done) => {
            const pacientes = await pool.pacientes.findOne({
                where: {
                    username: username
                }
            });
            if (pacientes === null) {
                const {
                    cedulaPaciente,
                    nombrePaciente,
                    apellidoPaciente,
                    fechaNacimientoPaciente,
                    celularPaciente
                } = req.body;
                
                let newUser = {
                    cedulaPaciente,
                    nombrePaciente,
                    apellidoPaciente,
                    fechaNacimientoPaciente,
                    celularPaciente,
                    username,
                    password
                };

                newUser.password = await helpers.encryptPassword(password);
                // Saving in the Database
                const result = await pool.pacientes.create(newUser)
                newUser.id = result.insertId;
                return done(null, newUser);
            } else {
                if (pacientes) {
                    const pacientes = pacientes

                    if (username == pacientes.username) {
                        done(null, false, req.flash("message", "El pacientes ya existe."));
                    } else {
                        const {
                            cedulaPaciente,
                            nombrePaciente,
                            apellidoPaciente,
                            fechaNacimientoPaciente,
                            celularPaciente
                        } = req.body;

                        let newUser = {
                            cedulaPaciente,
                            nombrePaciente,
                            apellidoPaciente,
                            fechaNacimientoPaciente,
                            celularPaciente,
                            username,
                            password
                        };

                        newUser.password = await helpers.encryptPassword(password);
                        // Saving in the Database
                        const result = await pool.pacientes.create(newUser)
                        newUser.id = result.insertId;
                        return done(null, newUser);
                    }
                }
            }
        }
    )
);

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});