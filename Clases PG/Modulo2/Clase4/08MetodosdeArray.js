let colores = ['azul', 'blanco', 'rojo', 'verde'];
console.log(colores);

// Metodo .push para agregar un dato al final
colores.push('violeta');
console.log(colores);

// Metodo .pop para eliminar el ultimo dato y lo podemos guardar en una variable
let color = colores.pop();
console.log(colores);

// Metodo .unshift para agregar un dato al inicio del array
colores.unshift('amarillo');
console.log(colores);

// Metodo .shift para eliminar el primer dato y lo podemos guardar en una variable
let color2 = colores.shift();
console.log(colores);

// Metodo .indexOf para buscar en el array un valor, si lo encuentra devuelve la posicion en la que esta
// si no lo encuentra devuelve un -1
let color3 = colores.indexOf('rojo');
console.log(color3);

// Metodo .lastindexOf para buscar en el array de atras hacia adelante, 
// si lo encuentra devuelve la posicion en la que esta, si no lo encuentra devuelve un -1
let color4 = colores.lastIndexOf('cafe');
console.log(color4);

// Metodo .includes para buscar en el array pero devuelve un booleano
let color5 = colores.includes('verde');
console.log(color5);

// Metodo .join para unir todo el array, solo separado por una , o alguno personalizado
let juntos = colores.join();
console.log(juntos);

let juntos2 = colores.join('/');
console.log(juntos2);