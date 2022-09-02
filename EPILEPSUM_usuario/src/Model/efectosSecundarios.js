const efectosSecundarios = (sequelize, type) => {
    return sequelize.define('efectosSecundarios', {
        idEfectosSecundarios: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombreEfectosSecundarios: type.STRING,
        descripcionEfectosSecundarios:type.STRING(2500),
        creacionEfectosSecundarios: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actulizacionEfectosSecundarios: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = efectosSecundarios