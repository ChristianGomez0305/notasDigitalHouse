const express = require('express');
const app = express();
const path = require('path');

// DECLARAR RUTAS
const rutasMain = require('./routes/main');

//REQUERIR MIDDLEWARES
var logMiddleware = require('./middlewares/logMiddleware');
app.use(logMiddleware);

// EJS
app.set('view engine','ejs');
//app.set ('views', __dirname + './views');
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

const methodOverride=require('method-override');
app.use(methodOverride('_method'));

// DECLARAR RUTAS ESTATICAS
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

// LEVANTAR SERVIDOR
app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));

// REQUERIR RUTAS
app.use('/', rutasMain);

app.use((req, res, next) => {
    res.status(404).render('not-found');
    next();
})