const contenido = (sequelize, type) => {
    return sequelize.define('contenidos', {
        idContenido: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombreContenido: type.STRING(2500),
        creacionContenido:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionContenido:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    },{
        timestamps: false,
     })    
}

module.exports = contenido
