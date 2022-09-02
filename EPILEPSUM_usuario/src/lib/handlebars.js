const timeago = require ("timeago.js");

const timeagoInstance = timeago;

const helpers = {};

helpers.timeago = (guardarTiempo)=>{
    return timeagoInstance.format (guardarTiempo)
}

module.exports = helpers
