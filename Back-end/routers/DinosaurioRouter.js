const express = require('express');
const { DinosaurioController } = require('../controllers/DinosaurioController');

const routerDino = express.Router();

routerDino.post('/nuevo', async (req, res) => {
    const { nombre, id_domesticacion, id_reproduccion, id_grupo } = req.body;
    try {
        const newUser = await DinosaurioController.saveNewDino(nombre, id_domesticacion, id_reproduccion, id_grupo);
        res.json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear al dinosaurio' });
    }
});

routerDino.put('/actu', async (req, res) => {
    const { id_dino, nombre, id_domesticacion, id_reproduccion, id_grupo } = req.body;
    try {
        const updateUser = await DinosaurioController.updateDino(id_dino, nombre, id_domesticacion, id_reproduccion, id_grupo);
        res.json(updateUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualiazar al dinosaurio ', nombre });
    }
});

routerDino.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await DinosaurioController.deleteDino(id);
        res.json({respueta: 'Se ha eliminado el dinosaurio con exito'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar al dinosaurio '});
    }
});


routerDino.get('/all', async (req, res) => {
    try {
        const allDinos = await DinosaurioController.getAllDinos();
        res.json(allDinos);
    } catch (error) {
        console.log(error);
        res.status(404).json({ error: 'No se han encontrado dinos registrados' });
    }
});

routerDino.get('/find/domestic/:id_domesticacion/reprod/:id_reproduccion/grupo/:id_grupo', async (req, res) => {
    const { id_domesticacion, id_reproduccion, id_grupo } = req.params;
    try {
        const findDinos = await DinosaurioController.getEspecificDinos(id_domesticacion, id_reproduccion, id_grupo);
        res.json(findDinos);
    } catch (error) {
        console.log(error);
        res.status(404).json({ error: 'No se han encontrado dinos registrados' });
    }
});

module.exports = {
    routerDino: routerDino
}