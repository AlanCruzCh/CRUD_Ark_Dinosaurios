const { db_connection } = require('../config/database_connection');

class C_Grupo {

    constructor(id_grupo, tipo_grupo) {
        this.id_grupo = id_grupo;
        this.tipo_grupo = tipo_grupo;
    }

    static async selectAllGrupos() {
        const conexion = await db_connection.getConnection();
        try {
            const [rows, fields] = await conexion.execute(
                'SELECT * FROM c_grupo',
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
    C_Grupo: C_Grupo
}