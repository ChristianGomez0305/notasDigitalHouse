// Operador de asignacion =
let variable = 'valor';
console.log(variable);

// Operadores aritmeticos +suma -resta *multiplicacion /division %modulo ++incremento --decremento
let suma = 1 + 2; // Suma 3
console.log(suma);
let resta = 2 - 1; // Resta 1
console.log(resta);
let multiplicacion = 2 * 2; // Multiplicacion 4
console.log(multiplicacion);
let division = 10 / 2; //Division 5
console.log(division);
let modulo = 5 % 2; // Residuo 1
console.log(modulo);
let incremento = 6;
console.log(++incremento); // Incremento 7
let decremento = 6;
console.log(--decremento); // Decremento 5

// Operadores de comparacion simple ==valor igual !=valor diferente 
console.log(5 == '5');
console.log(5 != '5');

// Operadores de comparacion extricta ===valor y tipo de dato igual !== valor y tipo de dato diferente
console.log(5 === '5');
console.log(5 !== '5');

// Operadores relacionales <menor que <=menor o igual que >mayor que  >=mayor o igual que
console.log(5 < '5');
console.log(5 <= '5');
console.log(5 > '5');
console.log(5 >= '5');

// Operadores logicos &&and ||or
let dia = 'domingo';
let clima = 'nublado';

if (dia == 'domingo' && clima != 'soleado'){
    console.log('Ver Netflix en casa');
} else if(dia == 'domingo' && clima == 'soleado'){
    console.log('Salir a pasear');
} 

if(dia != 'domingo' || clima != 'soleado' ){
    console.log('Trabajar en casa');
} 

// Operador de concatenacion y el NOT
let nombre = 'Christian';
let apellido = 'Gomez';
console.log(nombre + ' ' + apellido); // Se concatena el nombre y el apellido poniendo un espacio entre ellos
let noEsChristian= !(nombre == 'Christian'); // Daria true pero esta negado, entonces es false
console.log(noEsChristian);
console.log(!noEsChristian); //Negacion de algo que fue negado da true