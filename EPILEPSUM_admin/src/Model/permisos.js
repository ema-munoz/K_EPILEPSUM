const permisos = (sequelize, type) => {
    return sequelize.define(
        "permisos",
        {
            idpermisos: {
                type:type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nombrePermisos: type.STRING,
            estadoPermisos: type.STRING,
            creationPermisos: {
				type: "TIMESTAMP",
				defaultValue: type.literal("CURRENT_TIMESTAMP"),
				allowNull: false,
			},
			updatePermisos: {
				type: "TIMESTAMP",
				defaultValue: type.literal("CURRENT_TIMESTAMP "),
				allowNull: false,
			},
		},
		{
			timestamps: false,
		}
	);
};

module.exports = permisos;


    
