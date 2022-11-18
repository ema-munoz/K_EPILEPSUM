const medico = (sequelize, type) => {
  return sequelize.define(
    "medicos",
    {
      idMedicos: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombreMedicos: type.STRING,
      telefonoMedicos: type.INTEGER,
      edadMedicos: type.STRING,
      username: type.STRING,
      password: type.STRING(150),
      crecionMedicos: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizanMedicos: {
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

module.exports = medico;
