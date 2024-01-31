const express = require('express');
const { C_GrupoController } = require('../controllers/C_GrupoController');

const routerGrupo = express.Router();

// Ruta para obtener todos los tipos de grupos 
routerGrupo.get('/tipo', async (req, res) => {
    try {
        const grupos = await C_GrupoController.getAllGrupos();
        res.json(grupos);
    } catch (error) {
        console.log(error);
        res.status(404).json({ error: 'No se han encontrado los tipos de grupos' });
    }
});

module.exports = {
    routerGrupo: routerGrupo
}