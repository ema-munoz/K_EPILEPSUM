const proyectos = (sequelize, type) => {
  return sequelize.define(
    "proyectos",
    {
      idProyecto: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombreProyecto: type.STRING,
      descripcionProyecto: type.STRING(2250),
      misionProyecto: type.STRING(2250),
      visionProyecto: type.STRING(2250),
      crecionProyecto: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionProyectos: {
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

module.exports = proyectos;
