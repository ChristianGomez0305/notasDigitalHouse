let calificacion = [10,1,8,7,3,6,9,10,5,4];

// Metodo .map devuelve un nuevo array.
let notasPorcentaje = calificacion.map(function(numero){
    return numero * 10
});
console.log(notasPorcentaje);

// Metodo .filter filtra los numeros segun la condicion.
let notasAprobadas  = calificacion.filter(function(numero){
    return numero > 5;
})
console.log(notasAprobadas);

// Metodo .reduce funciona para reducir todos los datos en un solo dato.
let notasSuma = calificacion.reduce(function(numero, suma){
    return suma + numero;
})
console.log(notasSuma);

// Metodo .forEach
calificacion.forEach(function(valor,indice){
    console.log("Indice: " + indice +" Valor: " + valor);
})