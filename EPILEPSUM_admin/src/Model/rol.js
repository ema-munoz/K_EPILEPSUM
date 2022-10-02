const rol = (sequelize, type) => {
    return sequelize.define('roles', {
        idrol: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombreRol: type.STRING,
        estadoRol: type.STRING,
        creacionRol: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionRol: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}


module.exports = rol
