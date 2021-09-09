const express = require('express');
const path = require('path');
const router = express.Router();
const mainControlador = require('../controllers/mainController');

router.get('/', mainControlador.index);

router.get('/search', mainControlador.search);

router.get('/login', mainControlador.login)

router.get('/register', mainControlador.register)

router.post('/login', mainControlador.datesLogin)

router.post('/register', mainControlador.create)

router.get('/list', mainControlador.list)

router.put('/edit', function(req,res){

})

router.delete('/delete', function(req,res){
    
})

module.exports = router;