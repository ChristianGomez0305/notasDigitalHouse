function dividir(x, y){
    if (x == 0 || y == 0){
        return 'No se puede dividir por cero';
    }else{
        let div = x / y;
        return div;
    }
}

module.exports = dividir;