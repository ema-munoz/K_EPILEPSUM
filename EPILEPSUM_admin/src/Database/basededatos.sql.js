const mysql = require('mysql');

const {
    promisify
} = require('util');

const {
    database
} = require('../key');

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if (err) {
        if (err.coder === "PROTOCOL_CONNECTION_LOST") {
            console.error("Se cerró la conexión la base de datos")
        }
        if (err.coder === "ER_CON_COUNT_ERROR") {
            console.error("La base de datos tiene muchas conexiones")
        }
        if (err.coder === "ECONNREFUSED") {
            console.error("Conexión a base de datos rechazada")
        }
    }

    if (connection) connection.release()
    console.log("La base de datos esta conectada")
    return
})

pool.query = promisify(pool.query)

module.exports = pool
