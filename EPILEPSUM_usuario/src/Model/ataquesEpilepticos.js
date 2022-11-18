const ataquesEpilepticos = (sequelize, type) => {
  return sequelize.define(
    "ataquesEpilepticos",
    {
      idAtaquesEpilepticos: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      diasAtaquesEpilepticos: type.STRING,
      horaAtaquesEpilepticos: type.STRING,
      duracionAtaquesEpilepticos: type.STRING,
      creacionAtaquesEpilepticos: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionAtaquesEpilepticos: {
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

module.exports = ataquesEpilepticos;
