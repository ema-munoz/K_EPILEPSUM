const composicion = (sequelize, type) => {
    return sequelize.define('composicions', {
        inComposicions: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombreMedicamentos: type.STRING,
        composicionMedicamentos: type.STRING,
        descripcionMedicamentos: type.STRING,
        viaAdministracionMedicamentos: type.STRING,
        indicacionesMedicamentos: type.STRING,
        dosisMedicamentos: type.STRING,
        fechaElaboracionMedicamentos: type.STRING,
        fechaVencimientoMedicamentos: type.STRING,
        laboratorioMedicamentos: type.STRING,
        estadoMedicamentos: type.STRING,

        crecioComposiciones: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizanComposiciones: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = composicion