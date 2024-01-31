const { db_connection } = require('../config/database_connection');

class Dinosaurio {

    constructor(id_dino, nombre, id_domesticacion, id_reproduccion, id_grupo ) {
        this.id_dino = id_dino;
        this.nombre = nombre;
        this.id_domesticacion = id_domesticacion;
        this.id_reproduccion = id_reproduccion;
        this.id_grupo = id_grupo;
    }

    static async saveNewDino () {
        const conexion = await db_connection.getConnection();
        try {
            const [rows, fields] = await conexion.execute(
                'INSERT INTO dinosaurio (nombre, id_domesticacion, id_reproduccion, id_grupo) values (?, ?, ?, ?)',
                [this.nombre, this.id_domesticacion, this.id_reproduccion, this.id_grupo]
            );
            this.id_dino = rows.insertId;
            return this;
        } catch (error) {
            throw error;
        } finally {
            conexion.release();
        }
    }

    static async selectAllDinos () {
        const conexion = await db_connection.getConnection();
        try {
            const [rows, fields] = await conexion.execute(
                'SELECT * FROM dinosaurio',
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
    Dinosaurio: Dinosaurio
}