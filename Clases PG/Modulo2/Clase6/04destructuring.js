// Con un array
let nombres = ["Ana", "Christian", "Karim", "Lupe", "Bertha", "Omar", "Alejandro"];
// Se crean 3 variables y se dice que se sacan de nombres
let [primero, segundo, tercero] = nombres;

console.log(primero);
console.log(segundo);
console.log(tercero);

// Con un objeto literal
let persona = {
    nombre: "Christian",
    edad: 22,
    profesion: "programador",
    seriesFavoritas: ["Serie 1", "Serie 2", "Serie 3"]
}
// Se crean 3 variables con el nombre que tenga el objeto literal y se dice que se sacan de personas
let {nombre, profesion, edad:anios} = persona;

console.log(nombre);
console.log(profesion);
console.log(anios);