const pacientes = (sequelize, type) => {
  return sequelize.define(
    "pacientes",
    {
      idPaciente: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      imagenPaciente: type.STRING,
      username: type.STRING(99),
      password: type.STRING,
      cedulaPaciente: type.STRING(150),
      nombrePaciente: type.STRING,
      apellidoPaciente: type.STRING,
      fechaNacimientoPaciente: type.STRING(50),
      celularPaciente: type.STRING(50),
      crecionPaciente: {
        type: "TIMESTAMP",
        defaultValue: type.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      actualizacionPacientes: {
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

module.exports = pacientes;
