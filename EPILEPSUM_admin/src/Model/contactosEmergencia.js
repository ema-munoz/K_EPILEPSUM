const contactosEmergencia = (sequelize, type) => {
    return sequelize.define ("contactosEmergencia", {
        idContactosEmergencia: {
            type: type.INTEGER, 
            primaryKey: true,
            autoIncrement: true
        },

        nombreContactosEmergencia: type.STRING,
        familiarContactosEmergencia: type.STRING,
        telefonoContactosEmergencia: type.INTEGER,
        celularContactosEmergencia: type.INTEGER,
        crecionContactosEmergencia:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizanContactosEmergencia:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    },{
        timestamps: false,
     })
};

module.exports = contactosEmergencia;
