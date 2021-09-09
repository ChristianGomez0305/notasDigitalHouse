let fs = require('fs');

let documento = fs.readFileSync('prueba.txt', {encoding: 'utf-8'});

console.log(documento);