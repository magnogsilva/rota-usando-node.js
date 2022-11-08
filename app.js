const express = require('express');
const app = express();

var rota = require('./rota');
app.use('/', rota);

app.listen(3333, () => {
    console.log('Servidor iniciado na porta 3333: http://localhost:3333/');
});
