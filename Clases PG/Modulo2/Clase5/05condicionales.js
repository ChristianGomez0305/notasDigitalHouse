// If ternario sin if, else ni llaves
let dia = "miercoles"
let desicion = dia == "domingo" ? "Ir a jugar baloncesto" : "Estudiar mucho";
console.log(desicion);

// Switch
switch(dia){
    case "lunes","martes","miercoles":
        console.log("Es lunes");
        break;
    case "domingo":
        console.log("Es domingo");
        break;
    default:
        console.log("Es un dia diferente");
        break;
}