let variableString = 'Hola planeta tierra';
console.log(variableString);

// Metodo .length me dice cuantos caracteres tiene el string
let tamaño = variableString.length;
console.log(tamaño);

// Metodo .indexOf me dice en que caracter inicia lo que busco
let buscar = variableString.indexOf('planeta');
console.log(buscar);

// Metodo .slice toma ciertos caracteres o desde un cierto caracter
let desdeHasta = variableString.slice(18, 24);
console.log(desdeHasta);

// Metodo .trim quita espacios en blanco al inicio
let espacios = variableString.trim();
console.log(espacios);

// Metodo .split convierte el string en un array
let array = variableString.split();
let array2 = variableString.split(' ');
console.log(array);
console.log(array2);

// Metodo .replace
let reemplazar = variableString.replace('tierra', 'marte');
console.log(reemplazar);
