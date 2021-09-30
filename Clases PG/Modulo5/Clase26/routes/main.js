const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer');
const mainControlador = require('../controllers/mainController');

// EXPRESS VALIDATOR
const { body } = require('express-validator');

// VALIDACIONES
const validacionRegistro = [
    body('nombre').notEmpty().withMessage('Escribe tu(s) nombre(s)'),
    body('apellido').notEmpty().withMessage('Escribe tus apellidos'),
    body('correo').notEmpty().withMessage('No puedes dejar vacio el email').bail().isEmail().withMessage('Debes poner un email valido'),
    body('contraseña').notEmpty().withMessage('Debes poner una contraseña'),
    body('imagenUsuario').custom((value, { req }) => {
        let file = req.file;
        let extensions = ['.jpg', '.png', '.gif'];
        
        if (!file){
            throw new Error('Tienes que subir una imagen de perfil');
        }else{
            let fileExtension = path.extname(file.originalname);
            if(!extensions.includes(fileExtension)){
                throw new Error('Tienes que subir una imagen .jpg, .png o .gif');
            }
        }

        return true;
    })
]

//REQUERIR MIDDLEWARES
var logMiddleware = require('../middlewares/logDBMiddleware');
const logDBMiddleware = require('../middlewares/logDBMiddleware');

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

router.post('/register', upload.single('imagenUsuario'), validacionRegistro, mainControlador.create)

router.get('/list', mainControlador.list)

router.put('/edit', function(req,res){

})

router.delete('/delete', function(req,res){
    
})



module.exports = router;