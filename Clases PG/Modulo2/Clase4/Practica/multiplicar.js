function multiplicar(x, y){
    if (x == 0 || y == 0){
        return 0
    }else{
        let multi = x * y;
        return multi;
    }
}

module.exports = multiplicar;