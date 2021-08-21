const express = require('express');
const path = require('path');
const router = express.Router();

const productosControlador = require('../controllers/productosController');

router.get('/', productosControlador.index);

router.get('/:idProducto', productosControlador.detalle);

router.get('/:idProducto/comentarios/:idComentario?', productosControlador.detalleComentario);

module.exports = router;