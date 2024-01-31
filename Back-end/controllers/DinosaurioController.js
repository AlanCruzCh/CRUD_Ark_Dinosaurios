const { Dinosaurio } = require('../models/DinoModel');

class DinosaurioController {

    static async saveNewDino(nombre, id_domesticacion, id_reproduccion, id_grupo) {
        const newDino = new Dinosaurio(null, nombre, id_domesticacion, id_reproduccion, id_grupo);
        try {
            return await newDino.createNewDino();
        } catch (error) {
            throw error;
        }
    }

    static async updateDino(id_dino, nombre, id_domesticacion, id_reproduccion, id_grupo) {
        const dino = new Dinosaurio(id_dino, nombre, id_domesticacion, id_reproduccion, id_grupo);
        try {
            return await dino.updateDinoExist();
        } catch (error) {
            throw error;
        }
    }

    static async deleteDino(id_dino) {
        try {
            await Dinosaurio.deleteDinoById(id_dino);
        } catch (error) {
            throw error
        }
    }

    static async getAllDinos() {
        try {
            return await Dinosaurio.selectAllDinos();
        } catch (error) {
            throw error;
        }
    }

    static async getEspecificDinos(id_domesticacion, id_reproduccion, id_grupo) {
        try {
            return await Dinosaurio.selectEspecificsDino(id_domesticacion, id_reproduccion, id_grupo);
        } catch (error) {
            throw error;
        }
    }

}

module.exports = {
    DinosaurioController: DinosaurioController
}