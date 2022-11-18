const citaControl = (sequelize, type) => {
  return sequelize.define(
    "citasControl",
    {
      idCitaControl: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombreCitaControl: type.STRING,
      fechaCitaControl: type.STRING,
      horaCitaControl: type.STRING,
      establecimientoCitaControl: type.STRING,
      creacionCitaControl: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionCitaControl: {
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

module.exports = citaControl;
