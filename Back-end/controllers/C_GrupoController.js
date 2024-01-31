const { C_Grupo } = require('../models/C_GrupoModel');

class C_GrupoController {

    static async getAllGrupos() {
        try {
            return await C_Grupo.selectAllGrupos();
        } catch (error) {
            throw error;
        }
    }

}

module.exports = {
    C_GrupoController: C_GrupoController
}