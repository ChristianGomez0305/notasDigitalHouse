// Instanciar
let fechaActual = new Date();

let fecha = fechaActual;
let fechaBonita = fechaActual.toDateString();
let diastring = fechaActual.getDay();
let dianum = fechaActual.getDate();
let mes = fechaActual.getMonth();
let anio = fechaActual.getFullYear();

let dia = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

console.log(fechaBonita);
console.log("Hoy es " + dia[diastring - 1] + " " + (dianum) + " de " + meses[mes] + " de " + anio);

// Mi cumpleaños

let fechaCumple = new Date(1999,04,03);

let fechaC = fechaCumple;
let fechaBonitaC = fechaCumple.toDateString();
let diastringC = fechaCumple.getDay();
let dianumC = fechaCumple.getDate();
let mesC = fechaCumple.getMonth();
let anioC = fechaCumple.getFullYear();

console.log(fechaBonitaC);
console.log("Yo naci el " + dia[diastringC] + " " + (dianumC) + " de " + meses[mesC] + " de " + anioC);
