const medicacion = (sequelize, type) => {
  return sequelize.define(
    "medicaciones",
    {
      idMedicaciones: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      nombreMedicaciones: type.STRING,
      dosisMedicaciones: type.INTEGER,
      horaMedicaciones: type.STRING,
      fechaInicioMedicaciones: type.STRING,
      fechaFinalMedicaciones: type.STRING,
      crecionMedicaciones: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },

      actualizanMedicaciones: {
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

module.exports = medicacion;
