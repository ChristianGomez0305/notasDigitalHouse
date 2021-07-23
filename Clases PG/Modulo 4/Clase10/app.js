const path = require('path');
const express = require('express');
const { dirname } = require('path');
const app = express();

let saludo = "Bienvenido/a, ahora estamos en tu perfil"

// Usar recursos estaticos
app.use(express.static('public'));

// Poner a correr el servidor, el puero sera el 3000 y retorna mensaje de exito
app.listen(3000, () => console.log('Servidor Corriendo'))

// Indica que al hacer una peticion de get con una ruta ingresar a cierta ruta

app.get('/', function(req,res){
    let htmlPath = path.resolve(__dirname, './views/index.html');
    res.sendFile(htmlPath);
})

app.get('/index', function(req,res){
    let htmlPath = path.join(__dirname, '/views/index.html');
    res.sendFile(htmlPath);
})

app.get('/contacto', function(req,res){
    res.send("Entraste a contacto, bien echo");
})

app.get('/perfil', function(req,res){
    res.send(saludo);
})