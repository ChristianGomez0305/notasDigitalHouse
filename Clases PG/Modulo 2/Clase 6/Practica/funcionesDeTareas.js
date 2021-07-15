let tareasjs = require('./tareas.js');

function listaDeTareas(){
const palabra = process.argv[2];
switch(palabra){
    case "listar":
        tareaString = tareasjs.leer();
        console.log("-->> LISTA DE TAREAS <--");
        console.log("------------------------");
        tareaString.forEach(function(valor,indice){
            console.log("Tarea " + (indice + 1) + "\nDescripcion: " + valor.titulo + "\nEstatus : " + valor.estado);
            console.log("------------------------");
        });
        break;
    case "crear":
        const titulos = process.argv.slice(3,process.argv.length);
        let datosObtenidos = {
            titulo: titulos.join(" "),
            estado: "pendiente"
        }
        tareasjs.guardar(tareasjs.escribir([datosObtenidos],tareasjs.leer()));
        console.log("Guardado");
        break;
    case "filtrar":
        tareasjs.filtrar(process.argv[3]);
        break;
    case undefined:
        console.log("Atención - Tienes que pasar una acción");
        break;
    default:
        console.log("No entiendo qué quieres hacer");
}
}
module.exports = listaDeTareas;