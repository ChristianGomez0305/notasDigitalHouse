let nombres = ["Ana", "Christian"];
let nombres2 = ["Karim", "Lupe"];

let todos = [...nombres, ...nombres2];
console.log(todos);

let cursoProgramacion = {
    nombreCurso: "programacion",
    turno: "Matutino",
    sede: "online"
}

let estudianteUno = {
    nombre: "Christian",
    email: "christian@hotmail.com",
    ...cursoProgramacion
}
let estudianteDos = {
    nombre: "Ana",
    email: "ana@hotmail.com",
    ...cursoProgramacion
}
console.log(estudianteUno);
console.log(estudianteDos);

function muchos(...nombres){
    for(let i=0; i<nombres.length; i++){
        console.log("Hola " + nombres[i]);
    }
}
muchos("Ana", "Christian", "Karim");

let calificaciones = [10,9,8,7,6,5,4,3,2,1,0];

function promedio(...calificacion){
    let operacion = calificacion.reduce((num,suma) => suma + num);
    return operacion / calificacion.length;
}

console.log(promedio(10,9,8,7,6,5,4,3,2,1,0));