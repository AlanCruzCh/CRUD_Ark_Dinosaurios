const express = require('express');
const { C_DomesticadoController }  = require('../controllers/C_DomesticadoController');

const routerDomesticado = express.Router();

// Ruta para obtener todos los tipos de domesticacion 
routerDomesticado.get('/tipo', async (req, res) => {
    try {
        const domesticacion = await C_DomesticadoController.getAllDomesticados();
        res.json(domesticacion);
    } catch (error) {
        console.log(error);
        res.status(404).json({error: 'No se han encontrado los tipos de domesticacion'});
    }
});

module.exports = {
    routerDomesticado: routerDomesticado
}