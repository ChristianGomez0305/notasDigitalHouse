// Ciclo for

for (let i=0; i<=5; i++){
    console.log(i);
}


function factorial(numero){
    let operacion = 1;
    for (let i=1; i<=numero; i ++){
        operacion = operacion * i;
    }
    return operacion;
}
console.log(factorial(5));