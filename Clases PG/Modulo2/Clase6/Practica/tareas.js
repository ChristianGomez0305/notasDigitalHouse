const fs = require('fs');
let archivoTareas = {
leer : function (){
    let tarea = fs.readFileSync(__dirname + '/tareas.json', 'utf-8');
    let tareaString = JSON.parse(tarea);
    return tareaString;
},
escribir : function (arrayTarea,tareaS){
    let datosJuntos = [...tareaS, ...arrayTarea];
    let tareaJSON = JSON.stringify(datosJuntos);
    return tareaJSON;
},
guardar : function (tareaJ){
    let guardar = fs.writeFileSync('tareas.json', tareaJ);
    return guardar == undefined;
},
filtrar : function filtrarPorEstado(variable){
    tareaString = this.leer();
    console.log("-->> LISTA DE TAREAS <--");
    console.log("------------------------");
    tareaString.forEach(function(valor,indice){
        if (valor.estado == variable){
        console.log("Tarea " + (indice + 1) + "\nDescripcion: " + valor.titulo + "\nEstatus : " + valor.estado);
        console.log("------------------------");
        }
    });
}
}
module.exports = archivoTareas;