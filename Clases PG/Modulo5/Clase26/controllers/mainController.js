const pelicula = 'Batman';
const listaPelis = ['Peli 1', 'Peli 2', 'Peli 3'];
let fs = require('fs');
const { userInfo } = require('os');

const { validationResult } = require('express-validator');
const { render } = require('ejs');

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
        const errores = validationResult(req);

        if (!errores.isEmpty()){
            return res.render('login', {
                errors: errores.mapped(),
                old: req.body
            })
        }else{
            let archivoUsuario = fs.readFileSync('./data/users.json', {encoding: 'utf-8'});
            let usuarios;
            if (archivoUsuario == ""){
                usuarios = [];
            }else{
                usuarios = JSON.parse(archivoUsuario);
            }

            for(let i=0; i < usuarios.length; i++){
                if (usuarios[i].email == req.body.correo){
                    if(req.body.contraseña == usuarios[i].password){
                        var usuarioLogeado = usuarios[i];
                        break;
                    }
                }
            }
            if (usuarioLogeado == undefined){
                return res.render('login', {
                    errors: [{msg: "Credenciales invalidas"}]
                })
            }

            req.session.usuarioLogeado = usuarioLogeado;
            res.send('success');
        }
    },
    create: function(req, res){

        const errores = validationResult(req);

        if (!errores.isEmpty()){
            return res.render('register', {
                errors: errores.mapped(),
                old: req.body
            })
        }else{
        
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
    }
};

module.exports = mainControlador;