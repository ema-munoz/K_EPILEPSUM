const solicitud = (sequelize, type) => {
  return sequelize.define(
    "solicitudes",
    {
      idSolicitud: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fechaSolicitud: type.STRING,
      horaSolicitud: type.STRING,
      estadoSolicitud: type.STRING,
      creacionSolicitud: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionSolicitud: {
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

module.exports = solicitud;
