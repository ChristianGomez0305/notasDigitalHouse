function sumar(x, y){
    let suma = x + y;
    return suma;
}
module.exports = sumar;

function restar(x, y){
    let resta = x - y;
    return resta;
}
module.exports = restar;

function multiplicar(x, y){
    if (x == 0 || y == 0){
        return 0
    }else{
        let multi = x * y;
        return multi;
    }
}
module.exports = multiplicar;

function dividir(x, y){
    if (x == 0 || y == 0){
        return 'No se puede dividir por cero';
    }else{
        let div = x / y;
        return div;
    }
}
module.exports = dividir;