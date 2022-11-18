const detalleContenido = (sequelize, type) => {
  return sequelize.define(
    "detalleContenidos",
    {
      idDetalleContenido: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      descripcionDetalleContenido: type.STRING(2500),
      imagenDetalleContenido: type.STRING,
      videoDetalleContenido: type.STRING,
      creacionDetalleContenido: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionDetalleContenidos: {
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

module.exports = detalleContenido;
