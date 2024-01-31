var mysql = require('mysql2');

const db_connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Tacodepastor',
    database: 'database_dinos'
})

db_connection.connect( function(error_database) {
    if (error_database) {
        console.error('Error de conexión a la base de datos:', error_database);
    } else {
        console.log('Conexión exitosa a la base de datos');
        db_connection.end((error_database) => {
            if (error_database) {
                console.error('Error al cerrar la conexión:', error_database);
            } else {
                console.log('Conexión cerrada exitosamente');
            }
        });
    }
});
