const detalleProyecto = (sequelize, type) => {
    return sequelize.define('detalleProyectos', {
        idDetalleProyecto: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        objetivoDetalleProyecto: type.STRING(2500),
        creacionDetalleProyecto:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionDetalleProyectos:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    },{
        timestamps: false,
     })    
}

module.exports = detalleProyecto
