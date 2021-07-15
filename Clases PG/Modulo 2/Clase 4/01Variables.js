// Var es global y let es por bloques de codigo
var nombre = 'Christian';
console.log(nombre);

let numeroPreferido = 03;
// Marca error porque ya esta definido en este bloque de codigo.
//let numeroPreferido = 03;
console.log(numeroPreferido);

// Aqui no hay problema porque es otro bloque diferente
if (true){
    let numeroPreferido = 15;
    console.log(numeroPreferido);
}
// const es una constaste y no se puede modificar
const miEdad = 22;
console.log(miEdad);