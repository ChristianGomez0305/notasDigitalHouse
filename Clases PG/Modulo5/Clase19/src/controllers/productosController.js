const productosControlador = {
    index: function(req,res){
        res.send("Bienvenidos a todos los productos");
    },
    detalle: function(req,res){
        res.send("Bienvenidos al detalle del producto " + req.params.idProducto);
    },
    detalleComentario: function(req,res){
        if(req.params.idComentario == undefined){
            res.send("Estos son todos los comentarios del producto " + req.params.idProducto);
        }else {
            res.send("Este es el comentario " + req.params.idComentario + " del producto " + req.params.idProducto);
        }
    },
};

module.exports = productosControlador;