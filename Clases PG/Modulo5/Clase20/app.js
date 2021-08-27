const express = require('express');
const app = express();
const path = require('path');

// DECLARAR RUTAS
const rutasMain = require('./routes/main');

// EJS
app.set('view engine','ejs');
//app.set ('views', __dirname + './views');

// DECLARAR RUTAS ESTATICAS
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

// LEVANTAR SERVIDOR
app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));

// REQUERIR RUTAS
app.use('/', rutasMain);