const { C_Reproduccion } = require('../models/C_ReproduccionModel');

class C_ReproduccionController {

    static async getAllReproducion() {
        try {
            return await C_Reproduccion.selectAllReproduccion();
        } catch (error) {
            throw error;
        }
    }

}

module.exports = {
    C_ReproduccionController: C_ReproduccionController
}