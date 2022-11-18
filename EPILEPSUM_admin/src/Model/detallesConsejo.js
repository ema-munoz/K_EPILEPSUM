const detallesConsejos = (sequelize, type) => {
  return sequelize.define(
    "detallesConsejos",
    {
      idDetallesConsejo: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      consejosDetallesConsejo: type.STRING(2500),
      creacionDetallesConsejos: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionDetallesConsejos: {
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

module.exports = detallesConsejos;
