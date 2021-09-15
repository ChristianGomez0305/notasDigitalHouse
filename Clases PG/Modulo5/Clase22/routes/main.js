const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');
const mainControlador = require('../controllers/mainController');

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let carpeta = path.join(__dirname, '../public/img/profileImages')
        cb(null, carpeta);
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage});

router.get('/', mainControlador.index);

router.get('/search', mainControlador.search);

router.get('/login', mainControlador.login)

router.get('/register', mainControlador.register)

router.post('/login', mainControlador.datesLogin)

router.post('/register', upload.single('imagenUsuario'), mainControlador.create)

router.get('/list', mainControlador.list)

router.put('/edit', function(req,res){

})

router.delete('/delete', function(req,res){
    
})



module.exports = router;