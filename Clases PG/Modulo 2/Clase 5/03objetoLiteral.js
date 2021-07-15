
// Declaracion de un objeto literal
let persona = {
    nombre : "Christian",
    apellido : "Gomez",
    pais : "Mexico",
    edad : 22,
    deportes : ['futbol', 'baloncesto', 'beisbol'],
    nombreCompleto : function(){
        return this.nombre + " " + this.apellido;
    },
    informacion : function(){
        return "Mi nombre es " + this.nombreCompleto() + " y tengo " + this.edad + " años";
    }
}

console.log(persona);
console.log(persona.nombre);
console.log(persona['apellido']);
console.log("Mi nombre completo es " + persona.nombre + " " + persona.apellido);
console.log(persona.informacion());

// Instanciar un objeto literal
function NuevaPersona(nombre,apellido,pais,edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.paisNuevo = pais;
    this.edad = edad;
}

let profeInformatica = new NuevaPersona("Ana", "Hernandez", "Mexico", "22");
let profeMatematicas = new NuevaPersona("Alejandro", "Gonzalez", "Mexico", "38");

console.log(profeInformatica);
console.log(profeMatematicas);

// Ejercicio
let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function(cantidad){
        this.energia = this.energia - (cantidad*5);
        this.experiencia = this.experiencia + (cantidad*2);
    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
