const amigos = (sequelize, type) => {
    return sequelize.define('amigos', {
        idAmigos: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        creacionAmigos: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionAmigos: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = amigos