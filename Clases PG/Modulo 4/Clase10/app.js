const express = require('express');
const app = express();

let saludo = "Bienvenido/a, ahora estamos en tu perfil"

// Poner a correr el servidor, el puero sera el 3000 y retorna mensaje de exito
app.listen(3000, () => console.log('Servidor Corriendo'))

// Indica que al hacer una peticion de get / imprima el mensaje
app.get('/', function(req,res){
    res.send("Bienvenido al sitio");
})

app.get('/contacto', function(req,res){
    res.send("Entraste a contacto, bien echo");
})

app.get('/perfil', function(req,res){
    res.send(saludo);
})