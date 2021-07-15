function listaDeTareas(){
// Requerir las funciones fs
let fs = require('fs');
// Leer el archivo y guardar los datos en una variable
let tarea = fs.readFileSync(__dirname + '/tareas.json', 'utf-8');
// Convertir el tipo JSON en tipo string
let tareaString = JSON.parse(tarea);
// Obtener la palabra a ingresar de la consola, en este caso posicion 2 de "node app.js listar"
const palabra = process.argv[2];

switch(palabra){
    case "listar":
        console.log("-->> LISTA DE TAREAS <--");
        console.log("---------------------")
        for(let i=0; i<tareaString.length; i++){
            console.log("Tarea: " + tareaString[i].titulo + "\nEstado: " + tareaString[i].estado);
            console.log("---------------------")
        }
        break;
    case undefined:
        console.log("Atención - Tienes que pasar una acción");
        break;
    default:
        console.log("No entiendo qué quieres hacer");
}
}
module.exports = listaDeTareas;