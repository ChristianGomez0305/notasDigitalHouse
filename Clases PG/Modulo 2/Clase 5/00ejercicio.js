function noParesDeContarImparesHasta(numero){
    let x = 0;
    for(let i=0; i<=numero;i++){
        if ((i%2) != 0){
            x = x +1;
        }
    }
	return x;
}

console.log(noParesDeContarImparesHasta(5));