const familiar =(sequelize, type)=>{
    return sequelize.define('familiares', {
        idFamiliar:{
            type:type.INTEGER,
            primaryKey: true,
            autoIncrement: true,            
        },

        nombreFamiliar: type.STRING,
        crecionFamiliares:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },

        actualizanFamiliares:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = familiar