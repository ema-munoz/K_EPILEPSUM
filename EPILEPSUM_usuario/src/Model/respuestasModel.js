const respuestas = (sequelize, type) => {
    return sequelize.define('respuestas', {
        idRespuesta: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        respuesta: type.STRING(2500),
        videoRespuesta: type.STRING,
        imagenRespuesta: type.STRING,
        creacionRespuestas: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionRespuestas: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = respuestas