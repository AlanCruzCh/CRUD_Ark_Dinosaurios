const { db_connection } = require('../config/database_connection');

class Dinosaurio {

    constructor(id_dino, nombre, id_domesticacion, id_reproduccion, id_grupo ) {
        this.id_dino = id_dino;
        this.nombre = nombre;
        this.id_domesticacion = id_domesticacion;
        this.id_reproduccion = id_reproduccion;
        this.id_grupo = id_grupo;
    }

    async createNewDino () {
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

    async updateDinoExist () {
        const conexion = await db_connection.getConnection();
        try {
            const [rows, fields] = await conexion.execute(
                'UPDATE dinosaurio SET nombre = ?, id_domesticacion = ?, id_reproduccion = ?, id_grupo = ? WHERE id_dino = ?',
                [this.nombre, this.id_domesticacion, this.id_reproduccion, this.id_grupo, this.id_dino]
            );
            return this;
        } catch (error) {
            throw error;
        } finally {
            conexion.release();
        }
    }

    static async deleteDinoById (id_dino) {
        const conexion = await db_connection.getConnection();
        try {
            const [rows, fields] = await conexion.execute(
                'DELETE FROM dinosaurio WHERE id_dino = ?',
                [id_dino]
            );
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

    static async selectEspecificsDino(id_domesticacion, id_reproduccion, id_grupo) {
        const conexion = await db_connection.getConnection();
        let sql = 'SELECT * FROM DINOSAURIO WHERE';
        const conditions = [];
        if (id_domesticacion != 0) {
            conditions.push('id_domesticacion = ?');
        }
        if (id_reproduccion != 0) {
            conditions.push('id_reproduccion = ?');
        }
        if (id_grupo != 0) {
            conditions.push('id_grupo = ?');
        }
        if (conditions.length > 0) {
            sql += ' ' + conditions.join(' AND ');
        } else {
            sql += ' 1 = 1';
        }
        try {
            const [rows, fields] = await conexion.execute(
                sql,
                [id_domesticacion, id_reproduccion, id_grupo].filter(param => param != 0)
            );
            return rows;
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