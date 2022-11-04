const composicion = (sequelize, type) => {
	return sequelize.define(
		"composicion",
		{
			idComposicion: {
				type: type.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			nombreMedicamentos: type.STRING,
			composicionMedicamentos: type.STRING,
			descripcionMedicamentos: type.STRING,
			viaAdministracionMedicamentos: type.STRING,
			indicacionesMedicamentos: type.STRING,
			dosisMedicamentos: type.STRING,
			fechaElaboracionMedicamentos: type.DATE,
			fechaVencimientoMedicamentos: type.DATE,
			laboratorioMedicamentos: type.STRING,

			creacionComposiciones: {
				type: "TIMESTAMP",
				defaultValue: type.literal("CURRENT_TIMESTAMP"),
				allowNull: false,
			},
			actualizacionComposiciones: {
				type: "TIMESTAMP",
				defaultValue: type.literal("CURRENT_TIMESTAMP"),
				allowNull: false,
			},
		},
		{
			timestamps: false,
		}
	);
};

module.exports = composicion;
