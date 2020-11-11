const express = require('express');
const app = express();

app.listen(8000 , ()=> console.log("Levantando un servidor con Express"));

app.get('/', function(req, res){
    res.send('Bienvenido');
})