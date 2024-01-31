var mysql = require('mysql2/promise');

const db_connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Tacodepastor',
    database: 'database_dinos',
    waitForConnections: true,
    queueLimit: 0
});


module.exports = {
    db_connection: db_connection
}