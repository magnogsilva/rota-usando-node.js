var express = require('express');
var rota = express.Router();

rota.get('/', function (req, res){
    res.send('Hello World');
});

module.exports = rota;
