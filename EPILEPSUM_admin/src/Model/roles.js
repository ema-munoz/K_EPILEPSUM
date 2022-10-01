const rol = (sequelize, type) => {
    return sequelize.define(
        "rols",
        {
            idrol: {
                type:type.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nombreRol: type.STRING,
            estadoRol: type.STRING,
            creationRol: {
				type: "TIMESTAMP",
				defaultValue: type.literal("CURRENT_TIMESTAMP"),
				allowNull: false,
			},
			updateRol: {
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


module.exports = rol;


    
