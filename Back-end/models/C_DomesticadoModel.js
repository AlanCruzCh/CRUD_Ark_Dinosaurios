const { db_connection } = require('../config/database_connection');

class C_Domesticado {

    constructor(id_domesticacion, tipo_domesticacion) {
        this.id_domesticacion = id_domesticacion;
        this.tipo_domesticacion = tipo_domesticacion;
    }

    static async selectAllDinos() {
        const conexion = await db_connection.getConnection();
        try {
            const [rows, fields] = await conexion.execute(
                'SELECT * FROM c_domesticado',
            );
            return rows
        } catch (error) {
            throw error;
        } finally {
            conexion.release();
        }
    }

}

module.exports = {
    C_Domesticado: C_Domesticado
}