const path = require("path");
const dudas = {};

const baseDatosSQL = require("../Database/basededatos.sql");
const baseDatosORM = require("../Database/basededatos.orm");

dudas.mostrar = async (req, res) => {
	const idMaxPregunta = await baseDatosSQL.query(
		"SELECT MAX(idPreguntas) FROM preguntas"
	);
	const idMaxRespuesta = await baseDatosSQL.query(
		"SELECT MAX(idRespuesta) FROM respuestas"
	);
	res.render("dudas/dudasAgregar", {
		idMaxPregunta,
		idMaxRespuesta,
	});
};

dudas.agregar = async (req, res) => {
	const respuestasId = req.user.idUsuario;
	const {
		preguntaFinalImagen,
		preguntaFinalVideo,
		respuestaFinalImagen,
		respuestaFinalVideo,
		IdPreguntas,
		idRespuesta,
		pregunta,
		unico,
	} = req.body;
	const nuevoAgregamiento = {
		pregunta,
		usuarioIdUsuario: respuestasId,
	};
	/* Agregar Pregunta */
	await baseDatosORM.preguntas.create(nuevoAgregamiento);

	/*Agregar Imagen*/
	if (preguntaFinalImagen === "No") {
		console.log("No se envio ninguna imagen.");
	} else {
		const imagen = req.files.imagenPreguntas;
		const validacionImagen = path.extname(imagen.name);
		const extesionImagen = [
			".PNG",
			".JPG",
			".JPEG",
			".GIF",
			".TIF",
			".png",
			".jpg",
			".jpeg",
			".gif",
			".tif",
		];

		if (!extesionImagen.includes(validacionImagen)) {
			req.flash("success", "Imagen no compatible.");
		}

		if (!req.files) {
			req.flash("success", "Imagen no insertada.");
		}

		const ubicacion =
			__dirname + "/../public/img/dudas/Preguntas/" + imagen.name;

		imagen.mv(ubicacion, function (err) {
			if (err) {
				return res.status(500).send(err);
			}
			baseDatosSQL.query(
				"UPDATE preguntas SET imagenPreguntas = ? WHERE idPreguntas = ?",
				[imagen.name, IdPreguntas]
			);
		});
		console.log("Imagen de pregunta ingresada");
	}

	/* Agregar Video */
	if (preguntaFinalVideo === "No") {
		console.log("No se envio ningun video.");
	} else {
		const video = req.files.videoPreguntas;
		const validacionVideo = path.extname(video.name);
		const extensionVideo = [
			".MOV",
			".MKV",
			".MP4",
			".WMV",
			".FLV",
			".mov",
			".mkv",
			".mp4",
			".wmv",
			".flv",
		];

		if (!extensionVideo.includes(validacionVideo)) {
			req.flash("success", "Video no compatible.");
		}

		if (!req.files) {
			req.flash("success", "Video no insertado.");
		}

		const ubicacion =
			__dirname + "/../public/video/dudas/Preguntas/" + video.name;

		video.mv(ubicacion, function (err) {
			if (err) {
				return res.status(500).send(err);
			}
			baseDatosSQL.query(
				"UPDATE preguntas SET videoPreguntas = ? WHERE idPreguntas = ?",
				[video.name, IdPreguntas]
			);
		});
		console.log("video de pregunta ingresada");
	}

	/*Agregar Imagen*/
	if (respuestaFinalImagen === "No") {
		console.log("No se envio ninguna imagen.");
	} else {
		const imagen = req.files.imagenRespuesta;
		const validacionImagen = path.extname(imagen.name);
		const extesionImagen = [
			".PNG",
			".JPG",
			".JPEG",
			".GIF",
			".TIF",
			".png",
			".jpg",
			".jpeg",
			".gif",
			".tif",
		];

		if (!extesionImagen.includes(validacionImagen)) {
			req.flash("success", "Imagen no compatible.");
		}

		if (!req.files) {
			req.flash("success", "Imagen no insertada.");
		}

		const ubicacion =
			__dirname + "/../public/img/dudas/Respuestas/" + imagen.name;

		imagen.mv(ubicacion, function (err) {
			if (err) {
				return res.status(500).send(err);
			}
			baseDatosSQL.query(
				"UPDATE respuestas SET imagenRespuesta = ? WHERE idRespuesta = ?",
				[imagen.name, idRespuesta]
			);
		});
		console.log("Imagen de respuesta ingresada");
	}

	/* Agregar Video */
	if (respuestaFinalVideo === "No") {
		console.log("No se envio ningun video.");
	} else {
		const video = req.files.videoRespuesta;
		const validacionVideo = path.extname(video.name);
		const extensionVideo = [
			".MOV",
			".MKV",
			".MP4",
			".WMV",
			".FLV",
			".mov",
			".mkv",
			".mp4",
			".wmv",
			".flv",
		];

		if (!extensionVideo.includes(validacionVideo)) {
			req.flash("success", "Video no compatible.");
		}

		if (!req.files) {
			req.flash("success", "Video no insertado.");
		}

		const ubicacion =
			__dirname + "/../public/video/dudas/Respuestas/" + video.name;

		video.mv(ubicacion, function (err) {
			if (err) {
				return res.status(500).send(err);
			}
			baseDatosSQL.query(
				"UPDATE respuestas SET videoRespuesta = ? WHERE idRespuesta = ?",
				[video.name, idRespuesta]
			);
		});
		console.log("video ingresada");
	}

	/* Agregar Respuesta */
	await baseDatosSQL.query(
		"INSERT INTO respuestas (respuesta, usuarioIdUsuario, preguntaIdPreguntas) VALUES(?, ?, ?)",
		[unico, respuestasId, IdPreguntas]
	);
	req.flash("success", "Datos Guardos");
	res.redirect("/dudas/lista/" + respuestasId);
};

dudas.lista = async (req, res) => {
	const preguntasId = req.user.idUsuario;
	const enlistar = await baseDatosSQL.query(
		"SELECT DISTINCT idPreguntas, pregunta FROM listaDudas WHERE usuarioIdUsuario = ?",
		[preguntasId]
	);
	res.render("dudas/dudasLista", {
		enlistar,
	});
};

dudas.detalle = async (req, res) => {
	const id = req.params.id;
	const preguntasId = req.user.idUsuario;
	const enlistar = await baseDatosSQL.query(
		"SELECT DISTINCT idPreguntas, pregunta, imagenPreguntas, videoPreguntas FROM listaDudas WHERE idPreguntas = ?",
		[id]
	);
	const enlistar1 = await baseDatosSQL.query(
		"SELECT DISTINCT idRespuesta, respuesta, imagenRespuesta, videoRespuesta FROM listaDudas WHERE preguntaIdPreguntas = ?",
		[id]
	);
	res.render("dudas/dudasDetalle", {
		enlistar,
		enlistar1,
	});
};

dudas.traer = async (req, res) => {
	const preguntasId = req.params.id;
	const enlistar = await baseDatosSQL.query(
		"SELECT DISTINCT idPreguntas, pregunta, imagenPreguntas, videoPreguntas FROM listaDudas WHERE idPreguntas = ?",
		[preguntasId]
	);
	const enlistar1 = await baseDatosSQL.query(
		"SELECT DISTINCT idRespuesta, respuesta, imagenRespuesta, videoRespuesta FROM listaDudas WHERE preguntaIdPreguntas = ?",
		[preguntasId]
	);
	res.render("dudas/dudasEditar", {
		enlistar,
		enlistar1,
	});
};

dudas.editar = async (req, res) => {
	const respuestasId = req.params.id;
	const id = req.user.idUsuario;
	const {
		preguntaFinalImagen,
		preguntaFinalVideo,
		respuestaFinalImagen,
		respuestaFinalVideo,
		pregunta,
		respuestas,
		preguntas,
		objetivos1,
		unico,
		numeros,
		nrespuesta,
	} = req.body;
	const actualizacion = {
		pregunta,
	};
	await baseDatosORM.preguntas
		.findOne({
			where: {
				idPreguntas: respuestasId,
			},
		})
		.then((pregunta) => {
			pregunta.update(actualizacion);
		});

	/*Agregar Imagen*/
	if (preguntaFinalImagen === "No") {
		console.log("No se envio ninguna imagen.");
	} else {
		const imagen = req.files.imagenPreguntas;
		const validacionImagen = path.extname(imagen.name);
		const extesionImagen = [
			".PNG",
			".JPG",
			".JPEG",
			".GIF",
			".TIF",
			".png",
			".jpg",
			".jpeg",
			".gif",
			".tif",
		];

		if (!extesionImagen.includes(validacionImagen)) {
			req.flash("success", "Imagen no compatible.");
		}

		if (!req.files) {
			req.flash("success", "Imagen no insertada.");
		}

		const ubicacion =
			__dirname + "/../public/img/dudas/Preguntas/" + imagen.name;

		imagen.mv(ubicacion, function (err) {
			if (err) {
				return res.status(500).send(err);
			}
			baseDatosSQL.query(
				"UPDATE preguntas SET imagenPreguntas = ? WHERE idPreguntas = ?",
				[imagen.name, respuestasId]
			);
		});
		console.log("Imagen de pregunta ingresada");
	}

	/* Agregar Video */
	if (preguntaFinalVideo === "No") {
		console.log("No se envio ningun video.");
	} else {
		const video = req.files.videoPreguntas;
		const validacionVideo = path.extname(video.name);
		const extensionVideo = [
			".MOV",
			".MKV",
			".MP4",
			".WMV",
			".FLV",
			".mov",
			".mkv",
			".mp4",
			".wmv",
			".flv",
		];

		if (!extensionVideo.includes(validacionVideo)) {
			req.flash("success", "Video no compatible.");
		}

		if (!req.files) {
			req.flash("success", "Video no insertado.");
		}

		const ubicacion =
			__dirname + "/../public/video/dudas/Preguntas/" + video.name;

		video.mv(ubicacion, function (err) {
			if (err) {
				return res.status(500).send(err);
			}
			baseDatosSQL.query(
				"UPDATE preguntas SET videoPreguntas = ? WHERE idPreguntas = ?",
				[video.name, respuestasId]
			);
		});
		console.log("video de pregunta ingresada");
	}

	/*Agregar Imagen*/
	if (respuestaFinalImagen === "No") {
		console.log("No se envio ninguna imagen.");
	} else {
		const imagen = req.files.imagenRespuesta;
		const validacionImagen = path.extname(imagen.name);
		const extesionImagen = [
			".PNG",
			".JPG",
			".JPEG",
			".GIF",
			".TIF",
			".png",
			".jpg",
			".jpeg",
			".gif",
			".tif",
		];

		if (!extesionImagen.includes(validacionImagen)) {
			req.flash("success", "Imagen no compatible.");
		}

		if (!req.files) {
			req.flash("success", "Imagen no insertada.");
		}

		const ubicacion =
			__dirname + "/../public/img/dudas/Respuestas/" + imagen.name;

		imagen.mv(ubicacion, function (err) {
			if (err) {
				return res.status(500).send(err);
			}
			baseDatosSQL.query(
				"UPDATE respuestas SET imagenRespuesta = ? WHERE idRespuesta = ?",
				[imagen.name, nrespuesta]
			);
		});
		console.log("Imagen de respuesta ingresada");
	}

	/* Agregar Video */
	if (respuestaFinalVideo === "No") {
		console.log("No se envio ningun video.");
	} else {
		const video = req.files.videoRespuesta;
		const validacionVideo = path.extname(video.name);
		const extensionVideo = [
			".MOV",
			".MKV",
			".MP4",
			".WMV",
			".FLV",
			".mov",
			".mkv",
			".mp4",
			".wmv",
			".flv",
		];

		if (!extensionVideo.includes(validacionVideo)) {
			req.flash("success", "Video no compatible.");
		}

		if (!req.files) {
			req.flash("success", "Video no insertado.");
		}

		const ubicacion =
			__dirname + "/../public/video/dudas/Respuestas/" + video.name;

		video.mv(ubicacion, function (err) {
			if (err) {
				return res.status(500).send(err);
			}
			baseDatosSQL.query(
				"UPDATE respuestas SET videoRespuesta = ? WHERE idRespuesta = ?",
				[video.name, nrespuesta]
			);
		});
		console.log("video ingresada");
	}

	if (respuestas.length > 10) {
		await baseDatosSQL.query(
			"UPDATE respuestas SET respuesta = ? WHERE preguntaIdPreguntas = ? AND idRespuesta = ?",
			[respuestas, preguntas, nrespuesta]
		);

		if (parseInt(numeros) === 1) {
			await baseDatosSQL.query(
				"INSERT INTO respuestas(respuesta, preguntaIdPreguntas, usuarioIdUsuario) VALUES (?,?,?)",
				[unico, respuestasId, id]
			);
			req.flash("success", "Datos Actualizados.");
			res.redirect("/dudas/lista/" + respuestasId);
		}

		if (parseInt(numeros) > 1) {
			for (let j = 0; j < objetivos1.length; j++) {
				await baseDatosSQL.query(
					"INSERT INTO respuestas(respuesta, preguntaIdPreguntas, usuarioIdUsuario) VALUES (?,?,?)",
					[objetivos1[j], respuestasId, id]
				);
			}
			req.flash("success", "Datos Actualizados.");
			res.redirect("/dudas/lista/" + respuestasId);
		}

		if (numeros === "") {
			await baseDatosSQL.query(
				"UPDATE respuestas SET respuesta = ? WHERE idRespuesta = ?",
				[respuestas, parseInt(nrespuesta)]
			);
			console.log("No hay nuevas respuestas");
			req.flash("success", "Datos Actualizados.");
			res.redirect("/dudas/detalle/" + respuestasId);
		}
	}

	if (respuestas.length < 10) {
		for (let i = 0; i < respuestas.length; i++) {
			await baseDatosSQL.query(
				"UPDATE respuestas SET respuesta = ? WHERE preguntaIdPreguntas = ? AND idRespuesta = ?",
				[respuestas[i], preguntas, parseInt(nrespuesta) + i]
			);
		}

		if (parseInt(numeros) > 1) {
			for (let j = 0; j < objetivos1.length; j++) {
				await baseDatosSQL.query(
					"INSERT INTO respuestas(respuesta, preguntaIdPreguntas, usuarioIdUsuario) VALUES (?,?,?)",
					[objetivos1[j], respuestasId, id]
				);
			}
			req.flash("success", "Datos Actualizados.");
			res.redirect("/dudas/lista/" + respuestasId);
		} else {
			console.log("No hay nuevas respuestas.");
			req.flash("success", "Datos Actualizados.");
			res.redirect("/dudas/lista/" + respuestasId);
		}
	}
};

dudas.eliminarDuda = async (req, res) => {
	const respuestaId = req.params.id;
	const id = req.user.idUsuario;
	await baseDatosORM.preguntas.destroy({
		where: {
			idPreguntas: respuestaId,
		},
	});
	await baseDatosORM.respuestas.destroy({
		where: {
			idRespuesta: respuestaId,
		},
	});
	res.redirect("/dudas/lista/" + id);
};

dudas.eliminarRespuesta = async (req, res) => {
	const respuestaId = req.params.id;
	const id = req.user.idUsuario;

	await baseDatosORM.respuestas.destroy({
		where: {
			idRespuesta: respuestaId,
		},
	});
	res.redirect("/dudas/lista/" + id);
};

module.exports = dudas;
