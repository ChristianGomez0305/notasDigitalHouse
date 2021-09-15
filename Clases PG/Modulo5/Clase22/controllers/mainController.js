const pelicula = 'Batman';
const listaPelis = ['Peli 1', 'Peli 2', 'Peli 3'];
let fs = require('fs');
const { userInfo } = require('os');
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
        let archivoUsuario = fs.readFileSync('./data/users.json', {encoding: 'utf-8'});
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

        if(req.file){
            // OBTENER INFORMACION DEL HTML
            let usuario = {
                firstname: req.body.nombre,
                lastname: req.body.apellido,
                email: req.body.correo,
                password: req.body.contraseña,
                category: 'user',
                image: req.file.filename
            }
            // GUARDAR LA INFORMACION EN JSON
            let archivoUsuario = fs.readFileSync('./data/users.json', {encoding: 'utf-8'});
            let usuarios;
            if (archivoUsuario == ""){
                usuarios = [];
            }else{
                usuarios = JSON.parse(archivoUsuario);
            }
            usuarios.push(usuario);
            usuariosJSON = JSON.stringify(usuarios,null,2);
            fs.writeFileSync('./data/users.json', usuariosJSON);
        }else{
            // OBTENER INFORMACION DEL HTML
            let usuario = {
                firstname: req.body.nombre,
                lastname: req.body.apellido,
                email: req.body.correo,
                password: req.body.contraseña,
                category: 'user',
                image: 'user.png'
            }
            // GUARDAR LA INFORMACION EN JSON
            let archivoUsuario = fs.readFileSync('./data/users.json', {encoding: 'utf-8'});
            let usuarios;
            if (archivoUsuario == ""){
                usuarios = [];
            }else{
                usuarios = JSON.parse(archivoUsuario);
            }
            usuarios.push(usuario);
            usuariosJSON = JSON.stringify(usuarios,null,2);
            fs.writeFileSync('./data/users.json', usuariosJSON);
        }
        res.redirect("/list");
    }
};

module.exports = mainControlador;