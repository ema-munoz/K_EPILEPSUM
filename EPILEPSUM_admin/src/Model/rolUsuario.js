const usuario = (sequelize, type) => {
    return sequelize.define(
        "Rolusuarios",
        {
            idusuario: {
                type:type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
			nombreUsuario: type.STRING,
			estadoUsuario: type.STRING,
            creationUsuario: {
				type: "TIMESTAMP",
				defaultValue: type.literal("CURRENT_TIMESTAMP"),
				allowNull: false,
			},
			updateUsuario: {
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

module.exports = usuario;


    
