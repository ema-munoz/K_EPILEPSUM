const componenteFarmaco = (sequelize, type) => {
	return sequelize.define(
		"componenteFarmaco",
		{
			idComponenteFarmaco: {
				type: type.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			componenteFarmacoMedicamentos: type.STRING,

			creacionComponenteFarmaco: {
				type: "TIMESTAMP",
				defaultValue: type.literal("CURRENT_TIMESTAMP"),
				allowNull: false,
			},
			actualizacionComponenteFarmaco: {
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

module.exports = componenteFarmaco;
