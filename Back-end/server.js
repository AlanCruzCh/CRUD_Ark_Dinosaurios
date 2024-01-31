const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { routerDomesticado } = require('./routers/C_DomesticadoRouter');
const { routerReproduccion } = require('./routers/C_ReproduccionRouter');
const { routerGrupo } = require('./routers/C_GrupoRouter');
const { routerDino } = require('./routers/DinosaurioRouter');

const server = express();

server.use(bodyParser.json());

server.use(cors());

server.use('/api/domesticacion', routerDomesticado);
server.use('/api/grupo', routerGrupo);
server.use('/api/reproduccion', routerReproduccion);
server.use('/api/dinosaurio', routerDino);

const PORT = process.env.PORT || 3000;

server.listen( PORT, () => {
    console.log('Servidor creado en el puerto 3000');
});