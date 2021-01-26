const mysql = require('mysql');
const { promisify } = requiere('util');
const { databases } = require('./key');

const pool = mysql.createPool(databases);

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('DATABASE CONNECTION  WAS CLOSED');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('DATABSE HAS TO MANY CONNECTIONS');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('DATABASE CONNECTION WAS REFUSED')
        }
    }

    if (connection) connection.release();
    console.log('DB is Connected');
});


pool.query = promisify(pool.query);

module.exports = pool;