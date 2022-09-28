const mensajes = (sequelize, type) => {
    return sequelize.define('mensajes', {
        idMensaje: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        fechaMensaje: type.STRING,
        horaMensaje: type.STRING,
        creacionMensaje: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionMensaje: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
};

module.exports = mensajes
