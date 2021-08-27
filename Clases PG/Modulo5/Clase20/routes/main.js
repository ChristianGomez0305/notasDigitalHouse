const express = require('express');
const path = require('path');
const router = express.Router();
const mainControlador = require('../controllers/mainController');

router.get('/', mainControlador.index);

router.get('/home2', mainControlador.index2);

router.get('/login', mainControlador.login)

module.exports = router;