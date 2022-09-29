const farmaco = (sequelize, type) => {
    return sequelize.define('farmaco' , {
        idFarmaco: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        creacionFarmaco: {
            type: "TIMESTAMP",
            defaultValue: type.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
        },
        actualizacionFarmaco: {
            type: "TIMESTAMP",
            defaultValue: type.literal("CURRENT_TIMESTAMP"),
            allowNull: false
        },
    },{
        timestamps: false,
    });
}

module.exports = farmaco