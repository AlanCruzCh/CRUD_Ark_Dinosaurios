const { db_connection } = require('../config/database_connection');

class C_Reproduccion {

    constructor(id_reproduccion, tipo_reproduccion) {
        this.id_reproduccion = id_reproduccion;
        this.tipo_reproduccion = tipo_reproduccion;
    }

    static async selectAllReproduccion() {
        const conexion = await db_connection.getConnection();
        try {
            const [rows, fields] = await conexion.execute(
                'SELECT * FROM c_reproduccion',
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
    C_Reproduccion: C_Reproduccion
}