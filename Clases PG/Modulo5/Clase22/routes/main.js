const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');
const mainControlador = require('../controllers/mainController');

let multerDiskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

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