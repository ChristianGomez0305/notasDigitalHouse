const pelicula = 'Batman';
const listaPelis = ['Peli 1', 'Peli 2', 'Peli 3'];
const mainControlador = {
    index: function(req,res){
        res.render('home', {peli: pelicula});
    },
    search: function(req,res){
        let palabraBuscada = req.query.nombre;

        let users = [
            {id: 1, name: "Dario"},
            {id: 2, name: "Javier"},
            {id: 3, name: "Maru"},
            {id: 4, name: "Ale"},
            {id: 5, name: "Alan"},
        ];

        let resultado =[];

        for(let i=0; i < users.length; i++){
            if (users[i].name.includes(palabraBuscada)){
                resultado.push(users[i]);
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
        let users = [
            {id: 1, name: "Dario"},
            {id: 2, name: "Javier"},
            {id: 3, name: "Maru"},
            {id: 4, name: "Ale"},
            {id: 5, name: "Alan"},
        ];

        res.render('search', {'users': users});
    },
    datesLogin: function(req, res){

    },
    create: function(req, res){
        res.send(req.body);
    }
};

module.exports = mainControlador;