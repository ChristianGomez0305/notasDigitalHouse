
// Este es un array normal
let nombres = ['Ana', 'Christian', 'Abigail', 'Alejandro', 'Karim'];
console.log(nombres);

// JSON.stringify() recibe un objeto literal o un array y lo transforma en string de tipo JSON
let nombresJSON = JSON.stringify(nombres);
console.log(nombresJSON);
// JSON.parse() recibe un string de tipo JSON y lo transforma en un array o un objeto literal
let nombresOriginal = JSON.parse(nombresJSON);
console.log(nombresOriginal);


// Este es un objeto literal normal
let personas = {nombre: 'Christian', apellido: 'Gomez', edad: 22}
console.log(personas);
// JSON.stringify() recibe un objeto literal o un array y lo transforma en string de tipo JSON
let personasJSON = JSON.stringify(personas);
console.log(personasJSON);
// JSON.parse() recibe un string de tipo JSON y lo transforma en un array o un objeto literal
let personasOriginal = JSON.parse(personasJSON);
console.log(personasOriginal);