// Las arrow functions son funciones simplificadas

let saludar = () => "Hola mundo";
console.log(saludar());

let sumar = numero => numero + numero;
console.log(sumar(1));

let restar = (numero1, numero2) => numero1 - numero2;
console.log(restar(8,2));

let multiplicar = (numeroA, numeroB) =>{
    if (numeroA == 0 || numeroB == 0){
        return "Res: " + 0;
    }else{
        return "Resultado: " + (numeroA*numeroB);
    }
}
console.log(multiplicar(0,3));