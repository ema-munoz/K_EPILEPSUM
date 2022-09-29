const Sequelize = require("sequelize");
const mysql = require("mysql2/promise");

const dbName = process.env.DB_SCHEMAS || "EPILEPSUM";

mysql
	.createConnection({
		host: process.env.DB_HOST || "127.0.0.1",
		port: process.env.DB_PORT || "3306",
		user: process.env.DB_USER || "root",
		password: process.env.DB_PASSWORD || "",
	})
	.then((connection) => {
		connection
			.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`)
			.then((res) => {
				console.info("Base de datos creada o comprobada correctamente");
			});
	});

const usuarioModels = require('../Model/user')
const medicacionUsuarioModels = require('../Model/medicacion')
const ataquesModels = require('../Model/ataquesEpilepticos')
const medicosModels = require('../Model/medico')
const contactosEmergenciaModels = require('../Model/contactosEmergencia')
const familiaresModels = require('../Model/familiares')
const citaControlModels = require('../Model/citaControl')
const consejosModels = require('../Model/consejos')
const detallesExperienciasModels = require('../Model/detallesExperiencia')
const detallesConsejosModels = require('../Model/detallesConsejo')
const detallesMedicamentosModels = require('../Model/detallesMedicamentos')
const detallesRolModels = require('../Model/detallesRol')
const experienciasModels = require('../Model/experiencia')
const rolModels = require('../Model/rol')

const proyectoModels = require("../Model/proyecto");
const detalleProyectoModels = require("../Model/detalleProyecto");

const efectosSecundariosModels = require("../Model/efectosSecundarios");
const sintomasModels = require("../Model/sintomas");
const tipoEpilepsiaModels = require("../Model/tipoEpilepsia");

const preguntasModels = require("../Model/preguntasModel");
const respuestasModels = require("../Model/respuestasModel");
const pacientesModels = require("../Model/paciente");
const contenidoModels = require("../Model/contenidoModel");
const detalleContenidoModels = require("../Model/detalleContenidoModel");

const solicitudesModels = require("../Model/solicitudesModel");
const amigosModels = require("../Model/amigos");

const composicionMedicamentoModels = require('../Model/composicionMedicamentoModel')
const farmacoModels = require('../Model/farmaco')

const sequelize = new Sequelize("epilepsum", "root", "", {
	host: "localhost",
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		require: 30000,
		idle: 10000,
	},
});

sequelize
	.authenticate()
	.then(() => {
		console.log("Conectado");
	})
	.catch((err) => {
		console.log("No se conecto");
	});

sequelize.sync({ force: false }).then(() => {
	console.log("Tablas sincronizadas");
});

const usuario = usuarioModels(sequelize, Sequelize);
const medicacion = medicacionUsuarioModels(sequelize, Sequelize);
const ataque = ataquesModels(sequelize, Sequelize);
const medico = medicosModels(sequelize, Sequelize);
const contactosEmergencia = contactosEmergenciaModels(sequelize, Sequelize);
const familiares = familiaresModels(sequelize, Sequelize);
const citaControl = citaControlModels(sequelize, Sequelize);
const consejo = consejosModels(sequelize, Sequelize);
const detallesExperiencias = detallesExperienciasModels(sequelize, Sequelize);
const detallesConsejos = detallesConsejosModels(sequelize, Sequelize);
const detallesMedicamentos = detallesMedicamentosModels(sequelize, Sequelize);
const detallesRol = detallesRolModels(sequelize, Sequelize);
const experiencias = experienciasModels(sequelize, Sequelize);
const rol = rolModels(sequelize, Sequelize);

const proyecto = proyectoModels(sequelize, Sequelize);
const detalleProyecto = detalleProyectoModels(sequelize, Sequelize);

const efectosSecundarios = efectosSecundariosModels(sequelize, Sequelize);
const tipoEpilepsia = tipoEpilepsiaModels(sequelize, Sequelize);
const sintomas = sintomasModels(sequelize, Sequelize);

const preguntas = preguntasModels(sequelize, Sequelize);
const respuestas = respuestasModels(sequelize, Sequelize);
const pacientes = pacientesModels(sequelize, Sequelize);
const contenido = contenidoModels(sequelize, Sequelize);
const detalleContenido = detalleContenidoModels(sequelize, Sequelize);

const composicionMedicamento = composicionMedicamentoModels(sequelize, Sequelize)
const farmaco = farmacoModels (sequelize, Sequelize);

const solicitudes = solicitudesModels(sequelize, Sequelize);
const amigos = amigosModels(sequelize, Sequelize);

usuario.hasMany(efectosSecundarios);
efectosSecundarios.belongsTo(usuario);

usuario.hasMany(tipoEpilepsia);
tipoEpilepsia.belongsTo(usuario);

usuario.hasMany(sintomas);
sintomas.belongsTo(usuario);

usuario.hasMany(detallesRol);
detallesRol.belongsTo(usuario);

usuario.hasMany(experiencias);
experiencias.belongsTo(usuario);

usuario.hasMany(preguntas);
preguntas.belongsTo(usuario);

usuario.hasMany(respuestas);
respuestas.belongsTo(usuario);

pacientes.hasMany(contactosEmergencia);
contactosEmergencia.belongsTo(pacientes);

pacientes.hasMany(experiencias);
experiencias.belongsTo(pacientes);

pacientes.hasMany(medicacion);
medicacion.belongsTo(pacientes);

pacientes.hasMany(ataque);
ataque.belongsTo(pacientes);

familiares.hasMany(contactosEmergencia);
contactosEmergencia.belongsTo(familiares);

pacientes.hasMany(detallesRol);
detallesRol.belongsTo(pacientes);

rol.hasMany(detallesRol);
detallesRol.belongsTo(rol);

consejo.hasMany(detallesConsejos);
detallesConsejos.belongsTo(consejo);

experiencias.hasMany(detallesExperiencias);
detallesExperiencias.belongsTo(experiencias);

medicacion.hasMany(detallesMedicamentos);
detallesMedicamentos.belongsTo(medicacion);

pacientes.hasMany(citaControl);
citaControl.belongsTo(pacientes);

proyecto.hasMany(detalleProyecto);
detalleProyecto.belongsTo(proyecto);

usuario.hasMany(proyecto);
proyecto.belongsTo(usuario);

pacientes.hasMany(preguntas);
preguntas.belongsTo(pacientes);

pacientes.hasMany(respuestas);
respuestas.belongsTo(pacientes);

preguntas.hasMany(respuestas);
respuestas.belongsTo(preguntas);

pacientes.hasMany(consejo);
consejo.belongsTo(pacientes);

usuario.hasMany(contenido);
contenido.belongsTo(usuario);

contenido.hasMany(detalleContenido);
detalleContenido.belongsTo(contenido);

pacientes.hasMany(solicitudes);
solicitudes.belongsTo(pacientes);

solicitudes.hasMany(amigos);
amigos.belongsTo(solicitudes);
usuario.hasMany(efectosSecundarios)
efectosSecundarios.belongsTo(usuario)

usuario.hasMany(tipoEpilepsia)
tipoEpilepsia.belongsTo(usuario)

usuario.hasMany(sintomas)
sintomas.belongsTo(usuario)

usuario.hasMany(detallesRol)
detallesRol.belongsTo(usuario)

usuario.hasMany(experiencias)
experiencias.belongsTo(usuario)

usuario.hasMany(preguntas)
preguntas.belongsTo(usuario)

usuario.hasMany(respuestas)
respuestas.belongsTo(usuario)

pacientes.hasMany(contactosEmergencia)
contactosEmergencia.belongsTo(pacientes)

pacientes.hasMany(experiencias)
experiencias.belongsTo(pacientes)

pacientes.hasMany(medicacion)
medicacion.belongsTo(pacientes)

pacientes.hasMany(ataque)
ataque.belongsTo(pacientes)

familiares.hasMany(contactosEmergencia)
contactosEmergencia.belongsTo(familiares)

pacientes.hasMany(detallesRol)
detallesRol.belongsTo(pacientes)

rol.hasMany(detallesRol)
detallesRol.belongsTo(rol)

consejo.hasMany(detallesConsejos)
detallesConsejos.belongsTo(consejo)

experiencias.hasMany(detallesExperiencias)
detallesExperiencias.belongsTo(experiencias)

medicacion.hasMany(detallesMedicamentos)
detallesMedicamentos.belongsTo(medicacion)

pacientes.hasMany(citaControl)
citaControl.belongsTo(pacientes)

proyecto.hasMany(detalleProyecto)
detalleProyecto.belongsTo(proyecto)

usuario.hasMany(proyecto)
proyecto.belongsTo(usuario)

pacientes.hasMany(preguntas)
preguntas.belongsTo(pacientes)

pacientes.hasMany(respuestas)
respuestas.belongsTo(pacientes)

preguntas.hasMany(respuestas)
respuestas.belongsTo(preguntas)

pacientes.hasMany(consejo)
consejo.belongsTo(pacientes)

usuario.hasMany(contenido)
contenido.belongsTo(usuario)

contenido.hasMany(detalleContenido)
detalleContenido.belongsTo(contenido)

pacientes.hasMany(composicionMedicamento)
composicionMedicamento.belongsTo(pacientes)

composicionMedicamento.hasMany(farmaco)
farmaco.belongsTo(composicionMedicamento)

pacientes.hasMany(solicitudes)
solicitudes.belongsTo(pacientes)

module.exports = {
  usuario,
  medicacion,
  ataque,
  medico,
  contactosEmergencia,
  familiares,
  citaControl,
  consejo,
  detallesConsejos,
  detallesExperiencias,
  detallesMedicamentos,
  detallesRol,
  experiencias,
  rol,

  proyecto,
  detalleProyecto,
  efectosSecundarios,

  tipoEpilepsia,
  sintomas,
  preguntas,
  respuestas,
  pacientes,
  contenido,
  detalleContenido,

	solicitudes,
	amigos,

  composicionMedicamento, 
  farmaco,
};
