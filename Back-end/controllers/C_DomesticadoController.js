const { C_Domesticado } = require('../models/C_DomesticadoModel');

class C_DomesticadoController {

    static async getAllDomesticados() {
        try {
            return await C_Domesticado.selectAllDinos();
        } catch (error) {
            throw error;
        }
    }

}

module.exports = {
    C_DomesticadoController: C_DomesticadoController
}