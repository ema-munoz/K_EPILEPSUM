const usuario = (sequelize, type) => {
    return sequelize.define('usuario', {
        idUsuario: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: type.STRING(99),
        password: type.STRING,
        cedulaUsuario:type.STRING(150),
        nombreUsuario: type.STRING,
        apellidoUsuario: type.STRING,
        fechaNacimientoUsuario: type.STRING(50),
        celularUsuario: type.STRING(50),
        creacionUsuario: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionUsuario: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = usuario
