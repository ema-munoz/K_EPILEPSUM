const sintomas = (sequelize, type) => {
  return sequelize.define(
    "sintomas",
    {
      idSintomas: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombreSintomas: type.STRING,
      descrpcionSintomas: type.STRING(2500),
      creacionSintomas: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actulizacionSintomas: {
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

module.exports = sintomas;
