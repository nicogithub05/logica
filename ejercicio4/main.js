
function numberParoImpar(number) {
    if( typeof number !== 'number') {
        return 'ingresa un número positivo valido'
    }
    if(number % 2 === 0) {
        return 'el numero es par'
    }  else {
        return 'El numero es impar'
    }
}

console.log(numberParoImpar(4));
console.log(numberParoImpar(5));
console.log(numberParoImpar("hola"));

