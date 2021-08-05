// Funcion expresada
let sumar = function(x, y){
    return x + y;
}
console.log(sumar(7,9));

// Funcion declarada
function restar(x, y){
    return x - y;
}
console.log(restar(10,3));

// Scope local, la variable fue declarada dentro de la funcion y no puede ser utilizada fuera de esta
function local(){
    let variableLocal = 'Valor local';
    return variableLocal;
}
console.log(local());

// Scope global, la variable fue declarada fuera de la funcion y puede ser utilizada donde sea
let variableGlobal = 'Valor global';
function global(){
    return variableGlobal;
}
console.log(global());
console.log(variableGlobal);

function anterior(n1){
    return --n1;
    }
    
function triple(n2){
    return n2*3;
    }
    
function anteriorDelTriple(n3){
    let variable = triple(n3);
    return anterior(variable)
    }
    
console.log(anteriorDelTriple(10));