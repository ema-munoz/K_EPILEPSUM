const tipoEpilepsia = (sequelize, type) => {
  return sequelize.define(
    "tipoEpilepsia",
    {
      idTipoEpilepsia: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombreTipoEpilepsia: type.STRING,
      descripcionTipoEpilepsia: type.STRING(2500),
      creacionTipoEpilepsia: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actulizacionTipoEpilepsia: {
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

module.exports = tipoEpilepsia;
