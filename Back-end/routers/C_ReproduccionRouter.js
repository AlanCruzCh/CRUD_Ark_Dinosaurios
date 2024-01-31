const express = require('express');
const { C_ReproduccionController } = require('../controllers/C_ReproduccionController');

const routerReproduccion = express.Router();

// Ruta para obtener todos los tipos de reproduccion 
routerReproduccion.get('/tipo', async (req, res) => {
    try {
        const reproduccion = await C_ReproduccionController.getAllReproducion();
        res.json(reproduccion);
    } catch (error) {
        console.log(error);
        res.status(404).json({ error: 'No se han encontrado los tipos de reproduccion' });
    }
});

module.exports = {
    routerReproduccion: routerReproduccion
}