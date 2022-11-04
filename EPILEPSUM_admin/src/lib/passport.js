const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const pool = require("../Database/basededatos.orm");
const sql = require("../Database/basededatos.sql");
const helpers = require("./helpers");

passport.use(
	"local.signin",
	new LocalStrategy(
		{
			usernameField: "username",
			passwordField: "password",
			passReqToCallback: true,
		},
		async (req, username, password, done) => {
			const rows = await pool.usuario.findOne({
				where: {
					username: username,
				},
			});
			if (rows) {
				const user = rows;
				const validPassword = await helpers.matchPassword(
					password,
					user.password
				);
				if (validPassword) {
					done(
						null,
						user,
						req.flash("success", "Bienvenido/a " + user.nombre)
					);
				} else {
					done(
						null,
						false,
						req.flash("success", "Contraseña incorrecta")
					);
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
	new LocalStrategy(
		{
			usernameField: "username",
			passwordField: "password",
			passReqToCallback: true,
		},
		async (req, username, password, done) => {
			const usuario = await pool.usuario.findOne({
				where: {
					username: username,
				},
			});
			if (usuario === null) {
				const {
					cedulaUsuario,
					nombreUsuario,
					apellidoUsuario,
					fechaNacimientoUsuario,
					celularUsuario,
				} = req.body;

				let newUser = {
					cedulaUsuario,
					nombreUsuario,
					apellidoUsuario,
					fechaNacimientoUsuario,
					celularUsuario,
					username,
					password,
				};

				newUser.password = await helpers.encryptPassword(password);
				// Saving in the Database
				const result = await pool.usuario.create(newUser);
				newUser.id = result.insertId;
				return done(null, newUser);
			} else {
				if (usuario) {
					const usuarios = usuario;

					if (username == usuarios.username) {
						done(
							null,
							false,
							req.flash("message", "El Usuario ya existe.")
						);
					} else {
						const {
							cedulaUsuario,
							nombreUsuario,
							apellidoUsuario,
							fechaNacimientoUsuario,
							celularUsuario,
						} = req.body;

						let newUser = {
							cedulaUsuario,
							nombreUsuario,
							apellidoUsuario,
							fechaNacimientoUsuario,
							celularUsuario,
							username,
							password,
						};

						newUser.password = await helpers.encryptPassword(
							password
						);
						// Saving in the Database
						const result = await pool.usuario.create(newUser);
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
