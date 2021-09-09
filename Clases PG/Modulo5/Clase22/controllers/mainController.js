const pelicula = 'Batman';
const listaPelis = ['Peli 1', 'Peli 2', 'Peli 3'];
let fs = require('fs');
const mainControlador = {
    index: function(req,res){
        res.render('home', {peli: pelicula});
    },
    search: function(req,res){
        let palabraBuscada = req.query.nombre;

        let archivoUsuario = fs.readFileSync('usuarios.json', {encoding: 'utf-8'});
        let usuarios;
        if (archivoUsuario == ""){
            usuarios = [];
        }else{
            usuarios = JSON.parse(archivoUsuario);
        }

        let resultado =[];

        for(let i=0; i < usuarios.length; i++){
            if (usuarios[i].nombre.includes(palabraBuscada)){
                resultado.push(usuarios[i]);
            }
        }
        res.render('resultados', {resultado: resultado})
    },
    login: function(req,res){
        res.render('login');
    },
    register: function(req,res){
        res.render('register');
    },
    list: function(req,res){
        let archivoUsuario = fs.readFileSync('usuarios.json', {encoding: 'utf-8'});
        let usuarios;
        if (archivoUsuario == ""){
            usuarios = [];
        }else{
            usuarios = JSON.parse(archivoUsuario);
        }

        res.render('search', {'usuarios': usuarios});
    },
    datesLogin: function(req, res){

    },
    create: function(req, res){

        // OBTENER INFORMACION DEL HTML
        let usuario = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            correo: req.body.correo,
            contraseña: req.body.contraseña,
        }

        // GUARDAR LA INFORMACION EN JSON
        let archivoUsuario = fs.readFileSync('usuarios.json', {encoding: 'utf-8'});
        let usuarios;
        if (archivoUsuario == ""){
            usuarios = [];
        }else{
            usuarios = JSON.parse(archivoUsuario);
        }

        usuarios.push(usuario);

        usuariosJSON = JSON.stringify(usuarios);

        fs.writeFileSync('usuarios.json', usuariosJSON);

        res.redirect("/list");
    }
};

module.exports = mainControlador;