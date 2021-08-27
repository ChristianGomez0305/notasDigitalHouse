const pelicula = 'Batman';
const listaPelis = ['Peli 1', 'Peli 2', 'Peli 3'];
const mainControlador = {
    index: function(req,res){
        res.render('home', {peli: pelicula});
    },
    index2: function(req,res){
        res.render('home2', {
            lista: listaPelis,
            enOferta: true,
            genero: "accion"
        });
    },
    login: function(req,res){
        res.render('login');
    },
};

module.exports = mainControlador;