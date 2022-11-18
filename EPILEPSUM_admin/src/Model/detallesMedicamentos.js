const detallesMedicamentos = (sequelize, type) => {
  return sequelize.define(
    "detallesMedicamentos",
    {
      idDetallesMedicamentos: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      creacionDetallesMedicamentos: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionDetallesMedicamentos: {
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

module.exports = detallesMedicamentos;
