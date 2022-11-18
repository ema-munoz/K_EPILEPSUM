const detallesRol = (sequelize, type) => {
  return sequelize.define(
    "detallesRol",
    {
      idDetallesRol: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      creacionDetallesRol: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionDetallesRol: {
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

module.exports = detallesRol;
