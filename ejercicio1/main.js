console.log('Suma de 2 números');

function sumaNumeros(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        return 'Los valores ingresados no son números';
    }
    let resultado = a + b;
    return resultado
    
}

console.log(sumaNumeros(10, 20));
console.log(sumaNumeros(5, 35));
console.log(sumaNumeros("10", 20));



